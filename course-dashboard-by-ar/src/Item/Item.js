import React from 'react'

function ProgressBar({ progBar }) {
  let barClassName = "progress-bar"
  const progress = progBar ? progBar.progress : 0
  const barLength = 80
  if (progBar === undefined) {
    barClassName += " bar-no-active"
  }
  let firstDefaultBgColor = progBar && progBar.firstColor ? progBar.firstColor : "gba(94, 129, 244)"
  let seconfDefaultBgColor = progBar && progBar.secondColor ? progBar.secondColor : "gba(94, 129, 244, 0.2)"

  return (
    <div className={barClassName}
      style={{
        backgroundColor: seconfDefaultBgColor,
        width: `${barLength}px`
      }}
    >
      {progBar &&
        <span style={{
          backgroundColor: firstDefaultBgColor,
          width: `${progress}px`
        }}></span>
      }
    </div>
  )
}

const Item = ({ topTitle, bottomTitle, icon, progBar, logoStyle }) => {
  const progress = progBar ? progBar.progress : 0;

  return (
    <div className="item">
      <div className="item-logo" style={{ ...logoStyle }}>
        <img src={icon} />
      </div>
      <div className="item-title">
        <p className="item-title-top">{topTitle}</p>
        <p className="item-title-bottom">{bottomTitle}</p>
      </div>
      <ProgressBar progBar={progBar} />

    </div>
  )
}

export default Item