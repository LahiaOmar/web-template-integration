import React from 'react'
import MenuItem from '../MenuItem'
import dashboard from './dashboard.svg'
import friends from './friends.svg'
import chats from './chats.svg'
import resources from './resources.svg'
import allcourses from './allcourses.svg'
import settings from './settings.svg'
const Menu = () => {
  return (
    <div id="menu">
      <MenuItem text={"Dashboard"} svg={dashboard} />
      <MenuItem text={"Allcourses"} svg={allcourses} isActive />
      <MenuItem text={"Resources"} svg={resources} />
      <MenuItem text={"Friends"} svg={friends} />
      <MenuItem text={"Chats"} svg={chats} />
      <MenuItem text={"Settings"} svg={settings} />
    </div>
  )
}

export default Menu