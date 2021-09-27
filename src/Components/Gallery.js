import React from "react";
import RenderList from "./RenderList";

function Gallery({ data, start, setStart }) {
   return (
    <div className="gallery">
      {data.map((el, i) => (
        <RenderList key={i} {...el} start={start} setStart={setStart} />
      ))}
    </div>
  );
}

export default Gallery;
