import React from 'react'

const Item = ({ topTitle, bottomTitle, icon, progBar }) => {
  const progress = progBar ? progBar.progress : 0;
  let barClassName = "progress-bar"
  if (progress === 0) {
    barClassName += " bar-no-active"
  }
  console.log(progress, barClassName)
  return (
    <div className="item">
      <div className="item-logo"> <img src={icon} /> </div>
      <div className="item-title">
        <p className="item-title-top">{topTitle}</p>
        <p className="item-title-bottom">{bottomTitle}</p>
      </div>
      <div className={barClassName}>
        {progBar &&
          <span style={{
            width: `${progress}px`
          }}></span>
        }
      </div>

    </div>
  )
}

export default Item