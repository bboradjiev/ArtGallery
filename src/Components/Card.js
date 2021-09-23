import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactModal from 'react-modal';
import data from "../data.json";

function Card({match}) {
  let [modal, setModal] = useState(false)
    let chosenImg = data.find((el) => el.name === match.params.id);
    let nextSlide = data.indexOf(chosenImg) + 1;
    let prevSlide = data.indexOf(chosenImg) - 1;

   return (
    <>
      <div className="card">
        <aside className="card_left">
          <div className={!modal ? 'card_information' : ''}>
            <div className="container">
              <h1>{chosenImg.name}</h1>
              <p>{chosenImg.artist.name}</p>
            </div>
            <img
            className="painting_artist"
            src={`../images${chosenImg.artist.image}`}
            alt={chosenImg.name}
          />
          </div>
          {modal ? 
          <ReactModal isOpen={modal}  className="modal" >
            <div className="modal-wrapper">
              <button className='close_modal' onClick={()=>setModal(!modal)}>CLOSE</button>
              <img className="painting_modal"
                src={`../images${chosenImg.images.gallery}`}
                alt={chosenImg.name}
              />
            </div>
          </ReactModal> 
          : 
          ''} 
          <img
            className="painting"
            src={`../images${chosenImg.images.hero.large}`}
            alt={chosenImg.name}
          />         
          
          <span className='open_image' onClick={()=>setModal(!modal)}>
            <img src="../images/assets/shared/icon-view-image.svg"
                alt="left"/>View Image</span>
        </aside>
        <aside className="card_right">
          <div>
            <h1 className="year">{chosenImg.year}</h1>
            <p className="description">{chosenImg.description}</p>
          </div>
          <a href={chosenImg.source}>GO TO SOURCE</a>
        </aside>
      </div>
      <div className="slideshow">
        <div className='card_information'>
          <h1>{chosenImg.name}</h1>
          <p>{chosenImg.artist.name}</p>
        </div>
        <div className="arrows">
          {prevSlide > -1 ? 
          <Link to={`/image/${data[prevSlide].name}`}>
            <span  className="left_arrow">
              <img
                src="../images/assets/shared/icon-back-button.svg"
                alt="left"
              />
            </span>
          </Link>
          :
          <Link to={`/image/${data[data.length-1].name}`}>
            <span  className="left_arrow">
              <img
                src="../images/assets/shared/icon-back-button.svg"
                alt="left"
              />
            </span>
          </Link>
          }
          {nextSlide < data.length ?
            <Link  to={`/image/${data[nextSlide].name}`} >
              <span  className="right_arrow">
                <img
                  src="../images/assets/shared/icon-next-button.svg"
                  alt="right"
                />           
              </span>
            </Link>
            :
            <Link  to={`/image/${data[0].name}`} >
            <span  className="right_arrow">
              <img
                src="../images/assets/shared/icon-next-button.svg"
                alt="right"
              />           
            </span>
          </Link>
           }
          
        </div>
      </div>
    </>
  );
}

export default Card;
