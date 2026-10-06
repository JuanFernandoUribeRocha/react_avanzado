import { useState, useEffect } from "react";
import "./App.css";
import jokes from "./data/jokes.json";

function App() {
  const [chiste, setChiste] = useState(
    "Click en el botón para obtener un chiste aleatorio",
  );

  const getChiste = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setChiste(jokes[randomIndex]);
  };

  //useEffect para mostrar un chiste cuando se monta el componente
  useEffect(() => {
    getChiste();
  }, []);

  return (
    <>
      <section id="center">
        <h1>Chistes aleatorios</h1>
        <p>{chiste}</p>
        <button onClick={getChiste}>Nuevo chiste</button>
      </section>
    </>
  );
}

export default App;
