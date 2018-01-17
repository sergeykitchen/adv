import React from 'react'

function Errorfield(props) {
  const {input} = props;
  return (
    <div>
      <label>{input.name}</label>
      <input {...input} />
    </div>
  )
}

export default Errorfield;
