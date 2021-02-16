import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [cards, setCards] = useState([]);

  const processCardClick = (name) => {
    if(clicked.find(item => item===name)){
      setScore(0);
      setClicked([]);
    } else {
    setClicked(clicked=>[...clicked, name]);
    setScore(score+1);
    if(record < score+1) {
      setRecord(score+1);
    }
    }


    let temp = cards;
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    setCards(temp);
  }
  }

  useEffect(() => {

    const cocoUrl =
      "https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1";

    for (let i = 0; i < 12; i++) {
      setCards(cards => [...cards, {name: 'coconut'+i, url: cocoUrl,}])
    };
  } ,[]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>Score: {score}</p>
      <p>Record: {record}</p>
      <div
        className="board"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "90%",
        }}
      >
        {cards.map((item, key)=><Card name={item.name} imgUrl={item.url} key={key} processCardClick={processCardClick}/>)}
      </div>
    </div>
  );
};

export default App;
