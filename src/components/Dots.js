import React from 'react'
import images from './SliderImages';

const Dots = (props) => {
    const handleUpdate = id => {
        props.onUpdate(id);
    }
    return (
        <div className="all-dots">
           {images.map((image, index) => (
               <span 
                key={index}
                className={`${props.activeIndex === index ? "dot active-dot" : "dot"}`}
                onClick = {e => handleUpdate(index)}
               >
               </span>
           ))} 
        </div>
    )
}

export default Dots;
