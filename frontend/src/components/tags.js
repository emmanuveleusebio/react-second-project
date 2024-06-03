import React from "react";
import Tags from "./tagList";

const TagCard = () => {
  return (
    <div className="tags">
      <header>
        <p>Tags</p>
      </header>
      <div className="places">
      <ul className="tagUl">
        <Tags />
      </ul>
      </div>
    </div>
  );
};

export default TagCard;
