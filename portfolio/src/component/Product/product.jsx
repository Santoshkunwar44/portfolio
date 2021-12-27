import React from 'react'

import "./Product.css"
function product(props) {
    const {img,link,id}=props.val;
    console.log(img)
    return (
        <div  className='p'>
       <div className="p-browser">
           <div className="p-circle"></div>
           <div className="p-circle"></div>
           <div className="p-circle"></div>

       </div>
       <a href={link}>
           <img src={img} alt="" className='p-img'/>
       </a>
        </div>
    )
}

export default product
