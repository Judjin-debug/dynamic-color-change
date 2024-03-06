import React from 'react'

const CommandLine = ({ color, setColor }) => {
  return (
    <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color"></label>
      <input
        id='color'
        type='text'
        placeholder='Add Color Name'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  )
}

export default CommandLine