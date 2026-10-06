import { useState, useEffect } from "react";
import dinners from "./data/dinners.json";
import "./App.css";

function App() {
  const [dinner, setDinner] = useState(
    "Pasa obtener una reomendación de cena, presiona el botón.",
  );

  const getDinner = () => {
    const randomIndex = Math.floor(Math.random() * dinners.length);
    setDinner(dinners[randomIndex]);
  };

  useEffect(() => {
    getDinner();
  }, []);

  return (
    <>
      <section id="center">
        <h3>¿Quieres una recomencación para cenar?</h3>
        <p>{dinner}</p>
        <button onClick={getDinner}>Obtener recomendación</button>
      </section>
    </>
  );
}

export default App;
