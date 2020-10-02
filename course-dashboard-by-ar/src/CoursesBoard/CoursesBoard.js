import React from 'react'
import SearchBar from '../SearchBar'
import Notifications from '../Notifications'
import Course from '../Course'

const CoursesBoard = ()=>{
  return (
    <div>
      CoursesBoard
      <header>
        <SearchBar />
        <Notifications />
      </header>
      <div id="courses">
        <Course />
      </div>
    </div>
  )
}

export default CoursesBoard