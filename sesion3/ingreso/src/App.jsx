import { useState } from "react";
import "./App.css";
import credentials from "./data/credentials.json";

function App() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginStatus, setLoginStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === credentials.email &&
      formData.password === credentials.password
    ) {
      setLoginStatus("¡Ingreso exitoso!");
    } else {
      setLoginStatus("Correo electrónico o contraseña incorrectos.");
    }
  };
  return (
    <>
      <section id="center">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {loginStatus && <p>{loginStatus}</p>}
      </section>
    </>
  );
}

export default App;
