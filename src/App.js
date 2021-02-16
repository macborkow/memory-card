import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);

  return (
    <div>
      <p>Score: {score}</p>
      <p>Record: {record}</p>
      <div
        className="board"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: 'wrap',
        }}
      >
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
        <Card
          name="coconut"
          imgUrl="https://www.mensjournal.com/wp-content/uploads/2020/02/Coconut.jpg?w=1200&h=675&crop=1&quality=86&strip=all&iswp=1"
        />
      </div>
    </div>
  );
};

export default App;
