import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPost from "./CardPost";

const Cards = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("axios is working");
        const response = await axios.get("http://localhost:3000/api/home");
        setCardData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {cardData.map((data) => (
        <CardPost data={data} key={data._id} />
      ))}
    </>
  );
};

export default Cards;
