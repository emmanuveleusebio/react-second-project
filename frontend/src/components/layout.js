import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import Bloger from "./blogerCard";
import "./layout.css";
import FameCard from "./popular";
import TagCard from "./tags";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="mainLayout">
      <Header />
      <div className="pageBody">
        <div className="cards">
          <Cards />
        </div>
        <div className="asideCards">
          <Bloger />
          <FameCard />
          <TagCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
