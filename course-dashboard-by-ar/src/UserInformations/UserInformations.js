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
            firstColor: "rgba(94, 129, 244, 1)",
            secondColor: "rgba(94, 129, 244, 0.2)"
          }}
          logoStyle={
            {
              backgroundColor: '#EEF2FD'
            }
          }
        />
        <Item topTitle="Photography" bottomTitle="Intermediate" icon={photographyIcon}
          progBar={{
            progress: 50,
            firstColor: 'rgba(12,195,231,1)',
            secondColor: 'rgba(12, 195, 231, 0.18)'
          }}
          logoStyle={
            {
              backgroundColor: '#D5F5FB'
            }
          }
        />
        <Item topTitle="Animation" bottomTitle="Advance" icon={animationIcon}
          progBar={{
            progress: 50,
            firstColor: 'rgba(255, 128, 139, 1)',
            secondColor: 'rgba(255, 128, 139, 0.2)'
          }}
          logoStyle={
            {
              backgroundColor: '#FFEFD6'
            }
          }
        />
      </ItemContainer>
      <ItemContainer title="Upcoming Task">
        <Item topTitle="UX/UI - Discussion" bottomTitle="27 Oct 2020, Tuesday"
          icon={discussion}
          logoStyle={
            {
              backgroundColor: '#EEF2FD'
            }
          } />
        <Item topTitle="Animation - 3D Animation" bottomTitle="27 october 2020, Tuesday"
          icon={animation3D}
          logoStyle={
            {
              backgroundColor: '#FFEFD6'
            }
          } />
      </ItemContainer>
      <AppDownload />
    </div>
  )
}

export default UserInformations