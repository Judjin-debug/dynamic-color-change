import React from 'react'
import ColorSquare from './ColorSquare'
import CommandLine from './CommandLine'
import { useState } from 'react'

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className='App'>
      <ColorSquare 
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <CommandLine 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  )
}

export default App
