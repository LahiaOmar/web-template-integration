import React from 'react'

import logo from './cocacola_logo 1.png'
import p1 from './1.png'
import p2 from './2.png'
import p3 from './3.png'
import p4 from './4.png'

import nextBg from './linear-bg.png'

const data = [
  {
    img: p1,
    bg: 'linear-gradient(64.5deg, #292929 2.1%, #1C1C1C 100.55%)',
    name: 'Zero Sugar',
    description: "Coca-Cola Zero Sugar Real Coke taste with zero calories. It's possible!"
  },
  {
    img: p2,
    bg: 'linear-gradient(66.37deg, #ECE1C9 2.16%, #9F8C5C 103.37%)',
    name: 'Vanilla',
    description: "Great taste of Coca-Cola with refreshingly smooth balance of vanilla flavor."
  },
  {
    img: p3,
    bg: 'linear-gradient(66.37deg, #8F355A 2.16%, #5E2438 41.61%, #2C1316 103.37%)',
    name: 'Cherry',
    description: "Great taste of Coca-Cola with a sweet, smooth cherry flavor."
  },
  {
    img: p4,
    bg: 'linear-gradient(66.37deg, #F0AE54 2.16%, #8B481E 103.37%)',
    name: 'Orange Vanilla',
    description: "Newest flavor to join the Coke family with a new twist on delicious."
  }
]

function Slider() {
  const [state, setState] = React.useState({
    current: {
      img: data[0],
      bottleAnimation: 'animation-ri-mid',
      informationAnimation: 'animation-top-mid'
    },
    index: 0
  })
  const nextSlide = () => {

    const lastState = { ...state }
    lastState.current.bottleAnimation = "animation-mid-le"
    lastState.current.informationAnimation = "animation-mid-down"
    setState(lastState)
    setTimeout(() => {
      const lastState = { ...state }
      lastState.current.img = data[(lastState.index + 1) % data.length]
      lastState.index += 1
      setState(lastState)
    }, 500)
  }

  React.useEffect(() => {
    const lastState = { ...state }
    lastState.current.bottleAnimation = "animation-ri-mid"
    lastState.current.informationAnimation = "animation-top-mid"
    setState(lastState)
  }, [state.current.img])

  return (
    <div id="slider">
      <div style={{ background: state.current.img.bg }} id="slider-box">
        <div className="img-containers">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          <div className={`bottle-container ${state.current.bottleAnimation}`} >
            <img src={state.current.img.img} className="bottle" />
          </div>
        </div>
        <div className="information-container">
          <div
            className={`slide-information ${state.current.informationAnimation}`} >
            <p className="bottle-name">{state.current.img.name}</p>
            <p className="bottle-description">{state.current.img.description}</p>
          </div>
          <div className="slide-btn">
            <img className="slide-btn-img" src={nextBg} />
            <p onClick={() => nextSlide()} className="slide-btn-text">Next</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Slider