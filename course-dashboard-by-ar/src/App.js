import React from 'react';

import NavigationPanel from './NavigationPanel'
import CoursesBoard from './CoursesBoard'
import UserInformations from './UserInformations'
import './style.css'

function App() {

  return (
    <div className="container">
      <NavigationPanel />
      <CoursesBoard />
      <UserInformations />
    </div>
  );
}

export default App;