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
function* generate() {
  let i = 0;
  while (true) {
    yield i;
    i += 1;
  }
}
const INIT_GEN = 0
const nextInd = generate()
// something wrong here !
function Slider() {
  console.log("load class/function/components")
  const [slide, setSlide] = React.useState(data[0])
  const bottleRef = React.useRef()
  const textInformationRef = React.useRef()

  const next = () => {
    const index = nextInd.next().value
    console.log("ind ", index)
    bottleRef.current.style.animation = 'slide-mid-le 1s'
    setSlide(data[index % data.length])
  }

  // React.useEffect(() => {

  // }, [slide])

  React.useEffect(() => {
    if (bottleRef.current) {
      bottleRef.current.style.animation = 'slide-ri-mid 1s'
    }
  }, [])

  if (slide === null)
    return <div>is Loading ...</div>

  return (
    <div id="slider">
      <div style={{ background: slide.bg }} id="slider-box">
        <div className="img-containers">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          <div className="bottle-container" ref={bottleRef}>
            <img src={slide.img} className="bottle" />
          </div>
        </div>
        <div className="information-container">
          <div className="slide-information">
            <p className="bottle-name">{slide.name}</p>
            <p className="bottle-description">{slide.description}</p>
          </div>
          <div className="slide-btn">
            <img className="slide-btn-img" src={nextBg} />
            <p onClick={(e) => next()} className="slide-btn-text">Next</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider