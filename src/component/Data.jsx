
import React, { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
import '../App.css';
import 'jquery';


const Data = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Initialize the intlTelInput library when the component mounts
        const iti = intlTelInput(inputRef.current, {
            // You can add options here, refer to the documentation for available options
            // Example: allowDropdown: false,
        });

        // You can access the selected country data like this
        console.log('Selected Country:', iti.getSelectedCountryData());

        // Cleanup when the component unmounts
        return () => {
            iti.destroy();
        };
    }, []);

    return (
        <div>
            {/* Input element for phone number */}
            <input ref={inputRef} type="tel" />

            {/* You can add additional components or UI here as needed */}
        </div>
    );
};

export default Data;
