import React from 'react'

const MenuItem = ({ svg, text }) => {
  return (
    <div className="menu__item">
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