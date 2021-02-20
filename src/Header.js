import { Avatar, IconButton } from "@material-ui/core";
import { Apps, Mic, Notifications, Search, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import "./Header.css";
import useYoutube from "./useYoutubeSearch";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Header() {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    {
      input &&
        dispatch({
          type: actionTypes.SET_SERCH_TERM,
          term: input,
        });
    }
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.replicawatchindiaa.com/image/catalog/A%20Cartier/yt.jpg"
          alt=""
          className="header_logo"
        />
      </div>
      <form className="header_center">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Search />
        <button onClick={submit}>Search</button>
      </form>
      <div className="header_right">
        <IconButton>
          <Mic />
        </IconButton>
        <IconButton>
          <Videocam />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
