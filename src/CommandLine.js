import React from 'react'

const CommandLine = ({ color, setColor }) => {
  return (
    <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color">Add Color Name:</label>
      <input
        autoFocus
        type='text'
        placeholder='Add Color Name'
        required
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  )
}

export default CommandLine