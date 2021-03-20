import React from 'react'

export default function SingleModule({name, icon}) {
 
  return (
  <div className="module">
    <div className="moduleIcon">                  
      <i className={icon}></i>
    </div>
    <div className="moduleLabel">
      <b>{name}</b>
    </div>
    <i id="info" className="fas fa-info-circle"></i>
  </div>
  )
}
