import React from "react";
import './Welcome.css';
import Click from "../Click";

function Welcome({ firstName, lastName }) {
  return (
    <section>
      <h1 className="red">
        Welcome {firstName} {lastName} ! :)
      </h1>
      <Click />
    </section>
  );
}

export default Welcome;
