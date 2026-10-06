import styled from "styled-components";
import Navbar from "./assets/components/NavBar";
import Banner from "./assets/components/Banner";
import Card from "./assets/components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <InfoSection />
      {productos.map((producto) => (
        <Card
          key={producto.id}
          title={producto.title}
          onClick={() => console.log("Pulsado", producto.title)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
