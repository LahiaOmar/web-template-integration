import React from 'react'
import logoPng from './logo-imglogo.png'
const Logo = ()=>{
  return (
    <div id="logo">
      <div id="logo__img">
        <img src={logoPng} />
      </div>
      <div id="logo__txt">
        <p id="logo_company-name">Ohara</p>
      </div>
    </div>
  )
}

export default Logo