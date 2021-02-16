import React, { useState, useEffect } from "react";

const Card = (props) => {
  const { name, imgUrl } = props;

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "red",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          width: "75%",
          height: "75%",
        }}
        src={imgUrl}
        alt=""
      ></img>
      <p>{name}</p>
    </div>
  );
};

export default Card;
