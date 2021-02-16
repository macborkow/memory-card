import React, { useState, useEffect } from "react";

const Card = (props) => {
  const { name, imgUrl, processCardClick } = props;

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "#222",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "crosshair",
        borderRadius: "20px",
        textAlign: 'center',
      }}
      onClick={() => {
        processCardClick(name);
      }}
    >
      <img
        style={{
          width: "70%",
          height: "70%",
          borderRadius: "20px",
        }}
        src={imgUrl}
        alt=""
      ></img>
      <p>{name}</p>
    </div>
  );
};

export default Card;
