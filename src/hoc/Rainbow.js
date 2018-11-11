import React from "react";

const Rainbow = WrappedComponent => {
  const colours = ["red", "black", "green"];
  const randomColour = colours[Math.floor(Math.random() * 2)];
  const className = randomColour + "-text";

  //here this props is passed into this wrapped component
  //we are passing props to the about component
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
