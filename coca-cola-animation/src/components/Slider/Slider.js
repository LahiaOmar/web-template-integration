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
  const [currentData, setCurrentData] = React.useState({
    current: data[0],
    index: 0,
  })
  const [slides, setSlides] = React.useState(
    [
      { animation: 'animation-ri-mid' },
      { animation: '' },
      { animation: '' }
    ]
  )

  const nextSlide = () => {
    const lastSlidesState = [...slides]
    lastSlidesState.forEach((slide, ind) => {
      if (ind === currentData.index) {
        // new slide
        slide.animation = "animation-mid-le"
      }
    })
    setSlides(lastSlidesState)
    setTimeout(() => {
      setCurrentData({
        current: data[(currentData.index + 1) % data.length],
        index: (currentData.index + 1) % 3
      })
    }, 1000)
  }

  React.useEffect(() => {
    const lastSlidesState = [...slides]
    lastSlidesState.forEach((slide, ind) => {
      if (ind === currentData.index) {
        slide.animation = "animation-ri-mid"
      }
    })
    setSlides(lastSlidesState)
  }, [currentData])

  return (
    <div id="slider">
      <div style={{ background: currentData.current.bg }} id="slider-box">
        <div className="img-containers">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          {
            slides.map((element, ind) => {
              const img = ind === currentData.index ? currentData.current.img : null
              return (
                <div className={`bottle-container ${element.animation}`} >
                  <img src={img} className="bottle" />
                </div>
              )
            })
          }
        </div>
        <div className="information-container">
          <div className="slide-information">
            <p className="bottle-name">{currentData.current.name}</p>
            <p className="bottle-description">{currentData.current.description}</p>
          </div>
          <div className="slide-btn">
            <img className="slide-btn-img" src={nextBg} />
            <p onClick={(e) => nextSlide()} className="slide-btn-text">Next</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Slider