import React from 'react';
import images from './SliderImages';

const SliderContent = ({forwardedRef}) => {
    return (
            <div id="slideshow">
                <div id="slides-main" className="slides" ref={forwardedRef}>
                    {images.map((image, index) => {
                        return(
                        <div
                            className="slide"
                            key={index}
                            data-index={index}
                        >
                            <div className="abs-mask">
                                <img className="slide-image" src={image.url} alt="Slider Image" />
                            </div>
                        </div>
                        );
                    })} 
                </div>
                <div className="container">
                    <div className="hero-text-container">                       
                        <p className="hero-texts">サンプルテキスト</p>
                        <p className="hero-texts">サンプル ルテキスト</p>
                        <p className="hero-texts">サンプルテキスト</p>                    
                        <time className="hero-date" dateTime="2019-06-19">2019.06.19</time>                 
                    </div>
                </div>
            </div>
    )
}

export default SliderContent;