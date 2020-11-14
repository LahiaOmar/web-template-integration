import React from 'react'
import Course from '../Course'
import ux from './ux.png'
import orange from './orange.png'
import photography from './photography.png'

import annimationAvatar from './annimationAvatar.png'
import uxAvatar from './uxAvatar.png'
import photographyAvatar from './photographyAvatar.png'

const Courses = () => {
  return (
    <div id="courses">
      <div id="courses__header">
        <h2>All Courses</h2>
        <div id="courses__header__nav">
          <a href="#" className="nav-menu active">Ongoing</a>
          <a href="#" className="nav-menu">Favorite</a>
          <a href="#" className="nav-menu">Complete</a>
        </div>
      </div>
      <div id="course-list">
        <Course style={{ heigth: '200px' }} image={ux} title="UI/UX Design" avatar={uxAvatar} time="2h 20min" nbLesson={20} />
        <Course style={{ heigth: '200px' }} image={photography} title="Photography" avatar={photographyAvatar} time="2h 30min" nbLesson={12} />
        <Course style={{ heigth: '200px' }} image={orange} title={"Animation"} avatar={annimationAvatar} time="1h 30min" nbLesson={12} />
      </div>
    </div>
  )
}

export default Courses