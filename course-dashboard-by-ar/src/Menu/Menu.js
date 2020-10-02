import React from 'react'
import Item from '../Item'
import dashboard from './dashboard.svg'
import friends from './friends.svg'
import chats from './chats.svg'
import resources from './resources.svg'
import allcourses from './allcourses.svg'
import settings from './settings.svg'
const Menu = ()=>{
  return (
    <div id="menu">
      <Item text={"Dashboard"} svg={dashboard} />
      <Item text={"Allcourses"} svg={allcourses} />
      <Item text={"Resources"} svg={resources} />
      <Item text={"Friends"} svg={friends} />
      <Item text={"Chats"} svg={chats} />
      <Item text={"Settings"} svg={settings} />
    </div>
  )
}

export default Menu