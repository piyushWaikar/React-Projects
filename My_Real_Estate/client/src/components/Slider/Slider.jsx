import './Slider.scss';
import {useState} from 'react'

function Slider({images}) {
  const [imageIndex,setImageIndex] = useState(null);

  const changeSlide = (direction) => {

    if(direction === 'left'){
      if(imageIndex === 0){
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if(imageIndex === images.length - 1){
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }

  };
  return (
    <div className='slider'>
      
      {imageIndex !== null && <div className="fullSlider">
        <div className="arrow" onClick={()=> changeSlide('left')}>
          <img src="/arrowLeft.png" alt="" />
        </div>
        <div className="imgContainer">
          <img src={images[imageIndex]} alt="" />
        </div>
        <div className="arrow"  onClick={()=> changeSlide('right')}>
          <img  src='/arrowRight.png' alt="image" />
        </div>
        <div className="close" onClick={()=>setImageIndex(null)} >X</div>
      </div> }

      <div className="bigImage">
        <img src={images[0]} alt="" onClick={()=>setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image,i)=>(
          <img src={image} key={i} alt="images" onClick={()=>setImageIndex(i+1)} />
        ))}
      </div>
    </div>
  )
}

export default Slider