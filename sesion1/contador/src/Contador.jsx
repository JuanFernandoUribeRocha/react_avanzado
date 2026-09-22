import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Contador: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </div>
  );
}

export default Contador;
