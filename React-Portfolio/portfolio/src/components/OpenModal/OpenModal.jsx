import React,{useRef} from 'react'
import './OpenModal.scss'
const Modal = ({
  clickedImg,
  setClickedImg,
  clickedName,
  setClickedName,
  clickedTitle,
  setClickedTitle,
}) => {
  const overlay = useRef(0)
    const handleClick = (e) => {  
    if (e.target.classList.contains("close")) {
      setClickedImg(null);
      setClickedName(null);
      setClickedTitle(null)
    }
  };
  return (
      <div ref={overlay} className="overlay" onClick={handleClick}>
           <div className="wrapper">
                 <div className="wrapper-img">
                     <img src={clickedImg} alt="" />
                 </div>
                 <div className="content-title">
                    <div className="content__title--info">
                      <strong className='task'>{clickedName}</strong>
                      <p className='title'>{clickedTitle}</p>
                      <a href="" className="btn">View More</a>
                    </div>
                 </div>
           </div>
        <span className="close" onClick={handleClick}>
          X
        </span>
      </div>
  );
}


export default Modal