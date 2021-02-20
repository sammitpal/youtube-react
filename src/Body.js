import { Description } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Body.css";
import { useStateValue } from "./StateProvider";
import Thumb from "./Thumb";
import useYoutube from "./useYoutubeSearch";
function Body() {
  const [{ term }] = useStateValue();
  const { data } = useYoutube(term);
  console.log(data);
  return (
    <div className="body">
      {term &&
        data.items?.map((item) => (
          <Thumb
            vid = {item.id.videoId}
            title={item.snippet.title}
            description={item.snippet.description}
            src={item.snippet.thumbnails.medium.url}
          />
        ))}
    </div>
  );
}

export default Body;
