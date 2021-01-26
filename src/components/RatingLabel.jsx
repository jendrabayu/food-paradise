import React from 'react'

const RatingLabel = props => {
  const { labelColor, text } = props

  return (
    <div className="btn btn-sm"
      style={{
        color: 'white',
        backgroundColor: `#${labelColor}`,
        borderColor: `#${labelColor}`,
      }}
    >
      {`${text}`}
    </div>
  )
}

export default RatingLabel