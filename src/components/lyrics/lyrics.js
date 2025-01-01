import React from "react";
import "./lyrics.css";
import { musicDB } from "../../resources/musicData";

const Lyrics = (props) => {
  const { trackId, currentTime } = props;
  console.log(currentTime);
  var lyrics = [];

  return (
    <div className="lyrics-container">
      Lyrics Not Found
    </div>
  );
};

export default Lyrics;
