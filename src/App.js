import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Bandit", animal: "Dog", breed: "Lab" }),
    React.createElement(Pet, {
      name: "Pogo",
      animal: "Dog",
      breed: "Dalmation"
    }),
    React.createElement(Pet, {
      name: "Isabel",
      animal: "Cat",
      breed: "Persian"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
