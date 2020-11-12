import React from 'react'
import play from './play.png'
const Course = ({ image, title, avatar, time, nbLesson, style }) => {
  return (
    <div className="course"
      style={{
        backgroundImage: `url(${image})`
      }
      }>
      <div className="course-box-element-top">

        <div className="course-element">
          <h3 className="course-lesson-title">{title}</h3>
          <p className="course-lesson-nb">{nbLesson} lessons</p>
        </div>
        <div className="course-element">
          <p className="course-time">{time}</p>
        </div>

      </div>

      <div className="course-box-element-bottom">

        <div className="course-element">
          <div className="course-btn-play">
            <img className="course-play" src={play} />
          </div>
        </div>
        <div className="course-element">
          <img className="course-avatar" src={avatar} />
        </div>

      </div>
    </div>
  )
}

export default Course