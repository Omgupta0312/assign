import React from 'react'
import './sideBar.scss'
const SideBar = () => {

  return (
    <div className='sideBar'>
      <div className='up'>
        <div className='up-1'>
          <h2 id='name'>Hira R.</h2>
          <h5 id='designation'>UI/UX Designer</h5>
        </div>
        <div className="up-2">
          <div className='up-2-left'>
            <h4>125</h4>
            <h4>Projects</h4>
          </div>
          <div></div>
          <div className='up-2-right'>
            <h4>$125</h4>
            <h4>Revenue</h4></div>
        </div>


      </div>
      <div className='mid'></div>
      <div className='low'>
        <div className="gopro">
          <h3><b>Go Pro</b></h3>
          <h5>Upgrade your plan to get pro benefits</h5></div>
        <div className='low-button-con'><button className='button'>Let's Start</button></div>

      </div>
    </div>
  )
}

export default SideBar