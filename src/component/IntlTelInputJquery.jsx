import 'jquery';
import React, { useEffect, useRef } from 'react';
import '../App.css'; // Import the CSS file associated with the library
import '/Users/snehajature/ArxenaSite/src/js/intlTelInput.js'; // Import the intlTelInputUtils library
import '/Users/snehajature/ArxenaSite/src/js/intlTelInput-jquery.js'; // Import the intlTelInput jQuery plugin

const IntlTelInputReact = ({ initialCountry = 'auto' }) => {
    const inputRef = useRef(null);
    const instanceRef = useRef(null);

    useEffect(() => {
        // Load the utils script
        window.intlTelInputGlobals.loadUtils('/path-to-utils-script').then(() => {
            // Initialize the intlTelInput plugin
            instanceRef.current = window.$(inputRef.current).intlTelInput({
                initialCountry,
                // Add other options as needed
            });

            // Handle auto country
            instanceRef.current.handleAutoCountry();
        });

        // Cleanup on component unmount
        return () => {
            if (instanceRef.current) {
                instanceRef.current.destroy();
            }
        };
    }, [initialCountry]);

    return (
        <div>
            <input ref={inputRef} type="tel" />
        </div>
    );
};

export default IntlTelInputReact;
