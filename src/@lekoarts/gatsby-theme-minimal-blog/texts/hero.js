import React, { Component } from "react"
import "./hero.css";
import { Slide } from 'react-slideshow-image';

const slideImages = [
  './images/IMG-20200126-WA0057.jpg',
  './images/IMG-20200126-WA0057.jpg',
  './images/IMG-20200114-WA0004.jpg',
  './images/IMG-20200113-WA0038.jpg',
  './images/IMG-20191025-WA0188.jpg',
  './images/IMG-20190905-WA0266.jpg',
  './images/IMG-20190905-WA0225.jpg',
  './images/IMG-20190709-WA0105.jpg',
  './images/IMG-20190709-WA0106.jpg',
  './images/IMG-20190709-WA0107.jpg',
  './images/IMG-20190709-WA0108.jpg',
  './images/IMG-20190709-WA0109.jpg',
  './images/IMG-20190709-WA0110.jpg',
  './images/IMG-20190709-WA0111.jpg',
  './images/IMG-20190709-WA0113.jpg',
  './images/IMG-20190709-WA0114.jpg',
  './images/IMG-20190709-WA0115.jpg',
  './images/IMG-20190709-WA0116.jpg'
];

const properties = {
  duration: 2500,
  transitionDuration: 300,
  infinite: false,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
class SlidePics extends Component {
  render() {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[10]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[11]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[12]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[13]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[14]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[15]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[16]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[17]})`}}>
              
            </div>
            </div>
        </Slide>
      </div>
    )
}
}
export default SlidePics