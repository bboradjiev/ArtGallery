import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
function RenderList(props) {
  let imgRef = useRef();
  let [dynamicSpan, setDynamicSpan] = useState(0);
  useEffect(() => {
    imgRef.current.addEventListener("load", setSpans);
    setSpans();
  });

  let setSpans = () => {
    let height = imgRef.current.clientHeight;
    let spans = Math.ceil(height / 10);
    setDynamicSpan(spans);
  };
  return (
    <div className="container" style={{ gridRowEnd: `span ${dynamicSpan}` }}>
      <Link onClick={()=>props.setStart(!props.start)} to={`/image/${props.name}`}>
        <img
          ref={imgRef}
          className="image"
          src={`../images${props.images.thumbnail}`}
          alt={props.name}
        />
      </Link>

      <div className="information">
        <h3>{props.name}</h3>
        <p>{props.artist.name}</p>
      </div>
    </div>
  );
}

export default RenderList;
