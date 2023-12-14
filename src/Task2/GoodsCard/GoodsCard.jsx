import React from "react";

const GoodsCard = ({ imgLink, cost, name }) => {
  return (
    <div className="item">
      <img className="img" src={imgLink} alt={name} />
      <h2 className="text">{name}</h2>
      <p className="text">Cost: ${cost}</p>
    </div>
  );
};

export default GoodsCard;
