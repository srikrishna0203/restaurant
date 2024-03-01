import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import img_1 from '../images/kisspng-biryani-fried-rice-vegetarian-cuisine-pilaf-indian-our-food-items-5d10b59ac46e03.7730501515613761548046.png'
import img_2 from '../images/klipartz.com.png'
import img_3 from '../images/klipartz.com (2).png'
import img_4 from '../images/klipartz.com (3).png'
import img_5 from '../images/klipartz.com (8).png'
import img_6 from '../images/klipartz.com (9).png'
import img_7 from '../images/klipartz.com (10).png'
import img_8 from '../images/klipartz.com (11).png'
import img_9 from '../images/klipartz.com (12).png'
import food_img1 from "../images/food-13624.png"
const About = () => {
  let veg = [{"title":"Veg-Fried Rice","src":img_1},{"title":"Thali food platter","src":img_2},{"title":"Cooked rice dish","src":img_3},{"title":"Noodles and red paste","src":img_4}]
  let nonveg = [{"title":"CorelDRAW Lomo saltado Food","src":img_5},{"title":"Shashlik Chicken Lavash Kebab Shawarma","src":img_6},{"title":"Fish fry Shashlik Fried fish Barbecue","src":img_7},{"title":"Roasted chicken on plate","src":img_8}]
  return (
    <div className='home-cont'>
      <div className="main">
        <p><span>Food</span> is not just eating energy. It's an experience.</p>
        <img src={food_img1} alt="" />
      </div>
      <h1 className='category'>Vegetarian Food Specials</h1>
      <div className="veg-items">
          {
            veg.map((item)=>{
              return(        
                <div className='items2'>
                  <img src={item.src} alt="" />
                  <p>{item.title}</p>
                </div>  
              )
            })
          }
      </div>
      <h1 className='category'>Non-Vegetarian Food Specials</h1>
      <div className="veg-items">
          {
            nonveg.map((item)=>{
              return(        
                <div className='items2'>
                  <img src={item.src} alt="" />
                  <p>{item.title}</p>
                </div>  
              )
            })
          }
      </div>
      <div className="main">
        <img src={img_9} alt="" style={{marginLeft:"2%",marginTop:"5%"}}/>
        <p><span>Burgers: </span> the universal language of love.</p>
      </div>
      <div className="book-button2">
        <Link to="/reserve"><button>Book-A-Table</button></Link>
      </div>
    </div>
  )
}
export default About
