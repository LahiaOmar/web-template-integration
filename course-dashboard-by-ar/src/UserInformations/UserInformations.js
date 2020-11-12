import React from 'react'
import ItemContainer from '../ItemContainer'
import Profile from '../Profile'
import Item from '../Item'
import AppDownload from '../AppDownload'

import uxUi from './ux-ui.png'
import photographyIcon from './photography-icon.png'
import animationIcon from './animation-icon.png'
import discussion from './discussion.png'
import animation3D from './animation3d.png'

const UserInformations = () => {
  return (
    <div id="userInformation">

      <Profile />
      <ItemContainer title="Progress">
        <Item topTitle="UX/UI - Design" bottomTitle="Advanced" icon={uxUi}
          progBar={{
            progress: 50,
          }}
        />
        <Item topTitle="Photography" bottomTitle="Intermediate" icon={photographyIcon}
          progBar={{
            progress: 50,
          }}
        />
        <Item topTitle="Animation" bottomTitle="Advance" icon={animationIcon}
          progBar={{
            progress: 50,
          }}
        />
      </ItemContainer>
      <ItemContainer title="Upcoming Task">
        <Item topTitle="UX/UI - Discussion" bottomTitle="27 Oct 2020, Tuesday" icon={discussion} />
        <Item topTitle="Animation - 3D Animation" bottomTitle="27 october 2020, Tuesday" icon={animation3D} />
      </ItemContainer>
      <AppDownload />
    </div>
  )
}

export default UserInformations