import React from "react";

function Button({ type }) {
  return <button className={`button button--${type}`}>Get Started</button>;
}

export default Button;
