import React from 'react'
import './About.css'
import img_1 from '../images/klipartz.com (15).png'
const About = () => {
  return (
    <div className='about-cont'>
      <div className="items3" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <h3>Welcome to <span>Foodie-Restaurant</span>, where we believe that good food brings people together and creates lasting memories. Our journey began in 2020, when a group of food enthusiasts came together with a shared passion for cooking, eating, and sharing delicious meals.</h3>
        <img src={img_1} alt="" style={{style:"none"}}/>
      </div>
    </div>
  )
}

export default About
