import React, { useState } from "react";

function Click() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }

  function removeOne() {
    setCount(count - 1);
  }

  return (
    <section>
      <p>Vous avez cliqué {count} fois !</p>
      <button onClick={addOne}>Ajouter 1</button>
      <button onClick={removeOne}>Enlever 1</button>
    </section>
  );
}

export default Click;
