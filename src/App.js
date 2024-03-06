import React from 'react'
import ColorSquare from './ColorSquare'
import CommandLine from './CommandLine'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('');

  return (
    <div className='App'>
      <ColorSquare 
        color={color}
      />
      <CommandLine 
        color={color}
        setColor={setColor}
      />
    </div>
  )
}

export default App
