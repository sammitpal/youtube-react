import { Link } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Thumb.css";
function Thumb({ description, src, title, vid}) {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const setvid = () =>{
    dispatch({
      type: actionTypes.SET_VID,
      id: vid,
    });
    history.push("/player");
  }
  return (
    <div className="thumb" onClick={setvid}>
      <img src={src} alt="" />
      <div className="thumb_description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Thumb;
