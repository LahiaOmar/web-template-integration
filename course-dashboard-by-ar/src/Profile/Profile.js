import React from 'react'
import userAvatar from './user-avatar.png'

const Profile = () => {
  return (
    <div id="profile">
      <div id="avatar">
        <img src={userAvatar} />
      </div>
      <div>
        <button id="profile__button">Alexa Rogue</button>
      </div>
    </div>

  )
}

export default Profile