import React from 'react'

const ColorSquare = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      style={{
        backgroundColor : colorValue,
        color: isDarkText ? "#000" : "#FFF"
      }}
      className='colorSquare'
    >
      <p>{colorValue ? colorValue : 'Empty Value'}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

// ColorSquare.defaultProps = {
//   color: "Empty Color Value"
// }

export default ColorSquare