import React from "react";
import "./bloger.css";

const Bloger = () => {
  return (
    <div className="blogerMain">
      <div className="blogerImg">
        <img src="https://www.w3schools.com/w3images/avatar_g.jpg" alt="err" />
      </div>
      <div className="content">
        <h1 className="title">My Name</h1>
        <p className="titleDescription">
          Just me, myself and I, exploring the universe of uknownment. I have a
          heart of love and a interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you.
        </p>
      </div>
    </div>
  );
};

export default Bloger;
