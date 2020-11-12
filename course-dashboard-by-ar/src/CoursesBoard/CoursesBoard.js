import React from 'react'
import SearchBar from '../SearchBar'
import Notifications from '../Notifications'
import Courses from '../Courses'

const CoursesBoard = ()=>{
  return (
    <div id="coursesBoard">
      <header id="header-board">
        <SearchBar />
        <Notifications />
      </header>
      <Courses />
    </div>
  )
}

export default CoursesBoard