import React from 'react'

const ColorSquare = ({ color }) => {
  return (
    <div
      style={{backgroundColor : color}}
      className='colorSquare'
    >
      {color ? color : 'Empty Value'}
    </div>
  )
}

// ColorSquare.defaultProps = {
//   color: "Empty Color Value"
// }

export default ColorSquare