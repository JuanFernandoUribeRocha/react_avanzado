import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds <= 0) {
      setIsRunning(false);
    }
  }, [seconds]);

  const formatTime = (total) => {
    const minutes = String(Math.floor(total / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const reset = () => {
    setSeconds(60);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>Cronómetro</h1>
      <p>{formatTime(seconds)}</p>
      {seconds === 0 ? (
        <p>Tiempo agotado!</p>
      ) : isRunning ? (
        <p>Corriendo...</p>
      ) : (
        <p>Pausado, presiona Iniciar para continuar</p>
      )}
      <button onClick={() => setIsRunning(true)}>Iniciar</button>
      <button onClick={() => setIsRunning(false)}>Pausar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default App;
