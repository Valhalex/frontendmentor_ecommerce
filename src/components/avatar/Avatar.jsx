import React from 'react';
import './avatar.scss';


const Avatar = ({avatarMenuOpen, setAvatarMenuOpen}) => {
  return (
    <div className={"profile " + (avatarMenuOpen && "active")}>Avatar</div>
  )
}

export default Avatar