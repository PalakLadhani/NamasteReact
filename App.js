import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=>ReactElement-JS object=>HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

// console.log(heading);

//JSX-is not HTML in JS
// JSX-HTML-LIKE or XML-LIKE  SYNTAX
// JSX (transpiled before it reaches the JS)-PARCEL-Babel
// JSX=> Babel transpiles to Reac t.createElement=>ReactElement-JS object=>HTMLElement(render)

// React Element
// const jsxHeading =(<h1 id="heading">Namaste React using JSX🚀</h1>) ;
const heading = <h1 id="heading">Namaste React using JSX🚀</h1>;

// React Functional Components
// Component Composition
const Title = () => <h1>Namaste React using JSX🚀</h1>;

// Same above and below syntax

const HeadingComponent = () => (
  <div id="conatiner">
    {/* <Title />
    <Title></Title> */}
    {Title()}
    {/* we can write it so many times that above thing and above all are same things  */}
    <h1>Namaste React Functional Component</h1>
  </div>
);

// <HeadingComponent
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
