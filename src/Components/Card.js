import React from "react";
import data from "../data.json";

function Card({ match }) {
  const chosenImg = data.filter((el) => el.name === match.params.id);
  return (
      <>
    <div className="card">
        <aside className='card_left'>
            <div className='card_information'>
                <h1>{chosenImg[0].name}</h1>
                <p>{chosenImg[0].artist.name}</p>
            </div>
            <img className='painting' src={`../images${chosenImg[0].images.hero.large}`} alt={chosenImg[0].name} />
            <img  className='painting_artist'src={`../images${chosenImg[0].artist.image}`}  alt={chosenImg[0].name}/>
        </aside>
        <aside className='card_right'>
            <h1 className="year">{chosenImg[0].year}</h1>
            <p className="description">{chosenImg[0].description}</p>
            <a href={chosenImg[0].source}>GO TO SOURCE</a>
        </aside>
    </div>
    <div className="slideshow">
            <div className='card_information'>
                <h1>{chosenImg[0].name}</h1>
                <p>{chosenImg[0].artist.name}</p>
            </div>
            <div className='arrows'>
                <span className="left_arrow" ><img src='../images/assets/shared/icon-back-button.svg' alt='left'/></span>
                <span className="right_arrow"><img src='../images/assets/shared/icon-next-button.svg' alt='right'/></span>
            </div>
    </div>
    </>
  );
}

export default Card;
