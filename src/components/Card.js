import React, { useState, useEffect } from "react";

const Card = (props) => {
  const { name, imgUrl, processCardClick } = props;

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "red",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "crosshair",
      }}
      onClick={() => {processCardClick(name)}}
    >
      <img
        style={{
          width: "70%",
          height: "70%",
        }}
        src={imgUrl}
        alt=""
      ></img>
      <p>{name}</p>
    </div>
  );
};

export default Card;
