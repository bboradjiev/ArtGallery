import React from "react";
import RenderList from "./RenderList";

function Gallery({ data}) {

  return (
    <div className='gallery'>
      {data.map((el, i) => <RenderList key={i} {...el} />)}
    </div>
  );
}

export default Gallery;
