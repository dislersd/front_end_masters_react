const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {name: "Bandit", animal: "Dog", breed: "Lab"}),
    React.createElement(Pet, {name: "Pogo", animal: "Dog", breed: "Dalmation"}),
    React.createElement(Pet, {name: "Isabel", animal: "Cat", breed: "Persian"})
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
