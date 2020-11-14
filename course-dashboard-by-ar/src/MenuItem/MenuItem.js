import React from 'react'

const MenuItem = ({ svg, text, isActive }) => {
  let className = "menu__item"
  className += (isActive) ? " menu-active" : ""
  return (
    <div className={className}>
      <div className="menu__item__img">
        <img src={svg} />
      </div>
      <div className="menu__item__text">
        <a>{text}</a>
      </div>
    </div>
  )
}

export default MenuItem