import React from 'react'
import Logo from '../Logo'
import Menu from '../Menu'

const NavigationPanel = ()=>{
  return (
    <div id="navigation-panel">
      <Logo />
      <div id="join_button">
        <button>Join a course</button>
      </div>
      <Menu />
      <div id="upgrade_button">
        <button>Upgrade</button>
      </div>
    </div>
  )
}

export default NavigationPanel
