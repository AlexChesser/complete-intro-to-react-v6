const Pet = () => {
  return React.createElement("div", {}, [
      React.createElement("h2", {}, "Name"),
      React.createElement("h3", {}, "Animal"),
      React.createElement("h3", {}, "Breed"),
    ]);
}


const App = () => {
  return React.createElement(
    "div", 
    { id : "foo"},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet),
    ]
    );
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
