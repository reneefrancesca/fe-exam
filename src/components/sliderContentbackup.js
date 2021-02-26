import React from 'react';
import images from './SliderImages';

const SliderContent = (props) => {
    return (
        <section>
           {images.map((image, index) => (
               <div
                key={index}
                className={index === props.activeIndex ? "slides slide-in" : "slide-out"}
               >
                   <img className="slide-image" src={image.url} alt="Slider Image" />
               </div>
           ))} 
        </section>
    )
}

export default SliderContent;