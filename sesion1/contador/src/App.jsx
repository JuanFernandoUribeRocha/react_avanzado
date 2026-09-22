import React from "react";
import "./App.css";
import Contador from "./Contador.jsx";

/*
function Contador() {
  //Componente funcional
  return (
    <div>
      <h1>Contador</h1>
    </div>
  );
}

class ContadoClase extends Component {
  //Componente de clase
  render() {
    return (
      <div>
        <h1>Contador de clase</h1>
      </div>
    );
  }
}
  */

function App() {
  return (
    <>
      <section id="center">
        <Contador />
      </section>
    </>
  );
}

export default App;
