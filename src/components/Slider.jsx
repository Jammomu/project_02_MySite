import '../styles/Slider.css';
import sliderImg1 from '../img/slider001.png';
import sliderImg2 from '../img/slider002.png';
import sliderImg3 from '../img/slider003.png';
import leftBtnImg from '../img/left_btn.png';
import rightBtnImg from '../img/right_btn.png';
import { useState, useEffect } from 'react';

export function Slider(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const Sliders = [sliderImg1, sliderImg2, sliderImg3];

  const handleArrowClick = (direction)=>{
    let _index = currentIndex + direction;
    if(_index < 0){
      _index = 0;
    }
    else if(_index > Sliders.length -1){
      _index = Sliders.length - 1;
    }
    setCurrentIndex(_index);
  }

  useEffect(
    ()=>{
      const interval = setInterval(
        ()=>{
          setCurrentIndex((idx)=>(idx + 1) % Sliders.length);
        }, 3000
      );

      return()=>clearInterval(interval);
    }, [Sliders.length]
  );

  return(
    <div className="sliderZone">
      <div className="sub_photo_bg">
        <ul className="slider_panel" style={{left:`-${currentIndex * 100}%`}}>
          {Sliders.map(
            (slider, index)=>(
              <li key={index} className="slider_img">
                <img src={slider} alt="" />
              </li>
            )
          )}
        </ul>
        
        <div className="control_panel">
          {Sliders.map((slider, index)=>{
            return(
              <div key={index} className={`control_btn ${currentIndex === index ? 'active' : ''}`} onClick={()=>{setCurrentIndex(index)}}></div>
            );
          })}
        </div>

        <div className="direct_btn">
          <div className="left_btn" onClick={()=>handleArrowClick(-1)}>
            <img src={leftBtnImg} alt="" />
          </div>
          <div className="right_btn" onClick={()=>handleArrowClick(1)}>
            <img src={rightBtnImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}