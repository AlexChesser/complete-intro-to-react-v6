/* global React, ReactDOM */
const Pet = (props) => {
  return React.createElement("div", {}, [
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ]);
}


const App = () => {
  return React.createElement(
    "div", 
    { id : "foo"},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { name: "name1", animal: "aa", breed: "ba"}),
      React.createElement(Pet, { name: "name2", animal: "aa", breed: "ba"}),
      React.createElement(Pet, { name: "name3", animal: "aa", breed: "ba"}),
    ]
    );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
