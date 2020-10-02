import React from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import lettre from './lettre.svg'
import backgroundUpgrade from './background-upgrade.svg'

const NavigationPanel = ()=>{
  return (
    <div id="navigation-panel">
      <Logo />
      <div id="join_button">
        <button>Join a course</button>
      </div>
      <Menu />
      <div id="upgrade_button">
        <img src={backgroundUpgrade} className="upgrade_button__bgimg"/>
        <div className="upgrade_button_img">
          <img src={lettre} />
        </div>
        <div className="upgrade_button_txt">
          <p>Upgrade to for more resources</p>
        </div>
        <button>Upgrade</button>
      </div>
    </div>
  )
}

export default NavigationPanel
