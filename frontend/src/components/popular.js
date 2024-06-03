import React from "react";
import Aside from "./popularData";
import PostCss from "./popular.module.css"

const FameCard = ({ data }) => {
  return (
    <div className={PostCss.popularPostsCard}>
      <header>
        <p>Popular Posts</p>
      </header>

      <ul className={PostCss.postlist}>
        <Aside />
      </ul>
    </div>
  );
};

export default FameCard;
