import { useState } from 'react'
import './App.css'
import Data from './component/data'
import IntlTelInputReact from './component/IntlTelInputJquery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Data/>
     <IntlTelInputReact/>
    </>
  )
}

export default App
