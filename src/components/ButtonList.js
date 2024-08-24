import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Game",
    "Song",
    "Live",
    "Soccer",
    "News",
    "Batminton",
    "Game",
    "Song",
    "Live",
    "Soccer",
    "News",
    "Batminton",
    // "Game",
    // "Song",
    // "Live",
    // "Soccer",
    // "News",
    // "Batminton",
  ];

  return (
    <div className="flex">
      {list.map((list) => (
        <Button name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
