import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import getRandomFruitsName from "random-fruits-name";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [cards, setCards] = useState([]);

  const processCardClick = (name) => {
    if (clicked.find((item) => item === name)) {
      setScore(0);
      setClicked([]);
      loadCards();
    } else {
      setClicked((clicked) => [...clicked, name]);
      setScore(score + 1);
      if (record < score + 1) {
        setRecord(score + 1);
      }
      if(score+1 === 12) {
        setScore('12 ! Good job.')
      }
    }

    let temp = cards;
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
      setCards(temp);
    }
  };

  const loadCards = () => {
    let nameBase = [];
    let promiseList = [];
    let tempCards = [];
    for (let i = 0; i < 12; i++) {
      let foo;
      do {
        foo = getRandomFruitsName();
      } while (nameBase.find((item) => item === foo));

      nameBase = [...nameBase, foo];

      promiseList[
        i
      ] = fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=YgSMbNVTn9H2yFPan735riidNHosuAno&s=" +
          foo,
        { mode: "cors" }
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          tempCards = [
            ...tempCards,
            { name: foo, url: response.data.images.original.url },
          ];
        })
        .catch((e) => {
          throw e;
        });
    }

    Promise.all([...promiseList]).then(() => {
      setCards(tempCards);
    });
  };

  useEffect(() => {
    loadCards();
  }, []);

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
        {cards.map((item, key) => (
          <Card
            name={item.name}
            imgUrl={item.url}
            key={key}
            processCardClick={processCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
