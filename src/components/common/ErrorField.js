import React from 'react'

function Errorfield(props) {
 
  const {input, type, meta: {error, touched}} = props;
  // если одна ложь - вернет ложь, иначе вернет последнюю правду
  const errorText =  touched && error && <div style={{color: 'green'}}>{error}</div>
  return (
    <div>
      <label>{input.name}</label>
      <input {...input} type={type}/>
      
      {errorText}
    </div>
  )
}

export default Errorfield;
