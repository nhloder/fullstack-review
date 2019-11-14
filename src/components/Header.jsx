import React from 'react'
import logo from '../assets/Instamilligram'
import './css stuff/header'

const Header = () => {
  return (
    <div>
      <div className = 'profile-pic'>

      </div>
      <img src = {logo} alt = "oops"/>
      <div className="logout"></div>
    </div>
  )
}

export default Header