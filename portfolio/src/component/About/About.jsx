import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='a'>

        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src="https://images.pexels.com/photos/7605222/pexels-photo-7605222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='a-img' />
          </div>
        </div>
        <div className="a-right">
          <h1>About Me</h1>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut explicabo culpa hic iure exercitationem animi, accusantium, repellat tempore maiores architecto temporibus eveniet.</p>
          <div className="a-award">
            <img src="https://images.pexels.com/photos/6565255/pexels-photo-6565255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='a-right-img' />
            <p className="a-award-desc">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt mollitia et? dolor sit amet consectetur adipisicing elit. Sunt unde debitis architecto!</p>
          </div>
      
        </div>
        </div>
    )
}

export default About
