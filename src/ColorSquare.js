import React from 'react'

const ColorSquare = ({ color }) => {
  return (
    <div
      style={{background : color}}
      className='colorSquare'
    >
      {color.length ? (
        color
      ) : (
        'Empty Value'
      )}
    </div>
  )
}

export default ColorSquare