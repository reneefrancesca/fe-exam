import React, { useState, useEffect, useRef } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import "../css/hero.scss";

let slideDetails = {};

export const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const sliderContainer = useRef(null);
    const sliderImages = useRef(null);

    const sliderDisplay = (initial) => {
        let slider = {
            hero: sliderContainer.current,
            main: sliderImages.current,
            activeIndex: activeIndex,
            handle: null,
            idle: true,
            interval: 7000
        }
        slider.autoplay = true;
        slider.items = slider.hero.querySelectorAll('[data-index]');
        slider.total = slider.items.length;

        const loop = () => changeSlide('next');

        initial && requestAnimationFrame(loop);
        slider.handle = requestInterval(loop, slider.interval); 
        slideDetails = slider;
    }

    const requestInterval = (fn, delay) => {
        const requestAnimFrame = (function() {
            return window.requestAnimationFrame || function (callback, element) {
                window.setTimeout(callback, 1000/60);
            }
        })();
    
        let start = new Date().getTime(),
           handle = {};
        
        function loop() {
            const current = new Date().getTime(),
                    delta = current - start;
    
            if(delta >= delay) {
                fn.call();
                start = new Date().getTime();
            }
            handle.value = requestAnimFrame(loop);
        }
        handle.value = requestAnimFrame(loop);
        return handle;
    
    }
    
    const removeClasses = (nodeList, cssClasses) => {
        for(let i=0; i < nodeList.length; i++) {
            nodeList[i].classList.remove(...cssClasses);
        }
    }
    
    const addClasses = (nodeList, cssClasses) =>  {
        for(let i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.add(...cssClasses);
        }
    }
    
    const changeSlide = (direction) => {
        slideDetails.idle = false;
        slideDetails.hero.classList.remove('prev','next');
        if(direction == 'next') {
            slideDetails.activeIndex = (slideDetails.activeIndex + 1) % slideDetails.total;       
            slideDetails.hero.classList.add('next');
        } else {
            slideDetails.activeIndex = (slideDetails.activeIndex - 1 + slideDetails.total) % slideDetails.total;
            slideDetails.hero.classList.add('prev');
        }
        setActiveIndex(slideDetails.activeIndex);
       
        removeClasses(slideDetails.items, ['prev', 'active']);
    
        const prevItems = [...slideDetails.items]
            .filter(item => {
                let prevIndex;
                if(slideDetails.hero.classList.contains('prev')) {
                    prevIndex = slideDetails.activeIndex == slideDetails.total - 1 ? 0 : slideDetails.activeIndex + 1;
                } else {
                    prevIndex = slideDetails.activeIndex == 0 ? slideDetails.total - 1 : slideDetails.activeIndex - 1;
                }
                return item.dataset.index == prevIndex;
            });
        const activeItems = [...slideDetails.items]
            .filter(item => {
                return item.dataset.index == slideDetails.activeIndex;
            })
    
        addClasses(prevItems,['prev']);
        addClasses(activeItems,['active']);  
    }

    const handleUpdate = id => {
        setActiveIndex(id);
        slideDetails.activeIndex = id;
    }
 
    useEffect(() => {     
        sliderDisplay(true);
    }, []);
    return (
        <div className="slider-container" ref={sliderContainer}>
            <SliderContent activeIndex={activeIndex} forwardedRef={sliderImages}/>
            <Arrows   
                prevSlide = {() => changeSlide('prev')} 
                nextSlide = {() => changeSlide('next')}    
            />  
             <Dots 
                activeIndex = {activeIndex} 
                onUpdate={handleUpdate}
            /> 
        </div>
    )
}
export default Hero;