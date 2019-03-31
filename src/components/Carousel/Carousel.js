import React from 'react';
import PropTypes from 'prop-types';
import './Carousel.css'

const BASE_HEIGHT = 150;

const styles = {
  base: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no repeat',
    backgroundPosition: 'center center',
    small: {
        height: BASE_HEIGHT
    },
    medium: {
        height: BASE_HEIGHT*2
    },
    large: {
        height: BASE_HEIGHT*3
    },
    button:{
      display:'block',
      textAlign:'center',
      width: '5%',
      border: 'none',
      outline: 'none'
    },
    Buttonright:{
      float: 'right'
    },
    Buttonleft:{
      float: 'left'
    },
  }
}
function onClickLeft(image)
{
  console.log("Left button clicked!");
  n--;
  if(n < 0)
  {
    n = image.length-1;
  }
  document.getElementById("Carousel").style.backgroundImage=`url(${image[n]})`;
}
function onClickRight(image)
{
  console.log("Right button clicked! ");
  n++;
  if(n == image.length)
  {
    n = 0;
  }
  document.getElementById("Carousel").style.backgroundImage=`url(${image[n]})`;
}

var n = 0;
const Carousel = ({size, image}) => {
  console.log(n);
  return (
    <div id="Carousel" style={{...styles.base, ...styles.base[size], backgroundImage:`url(${image[n]})` }}>
    <button className="btn" type="button" style={{...styles.base[size],...styles.base.button, ...styles.base.Buttonleft}} onClick={(e) => onClickLeft(image)}></button>
    <button className="btn" type="button" style={{...styles.base[size],...styles.base.button, ...styles.base.Buttonright}} onClick={(e) => onClickRight(image)}></button>
    </div>
  )
};
Carousel.propTypes = {
  size: PropTypes.oneOf(['small','medium','large']).isRequired,
  image: PropTypes.array.isRequired
};

export default Carousel;
