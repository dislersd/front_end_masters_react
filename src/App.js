import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import { join } from "path";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Bandit", animal: "Dog", breed: "Lab" }),
  //   React.createElement(Pet, {
  //     name: "Pogo",
  //     animal: "Dog",
  //     breed: "Dalmation"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Isabel",
  //     animal: "Cat",
  //     breed: "Persian"
  //   })
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <Pet name="Bandit" animal="dog" breed="lab" />
      <Pet name="Luna" animal="dog" breed="lab" />
      <Pet name="Isabel" animal="cat" breed="persian" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
