import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = (data) => {
    const validationErrors = {};
    if (!data.name) {
      validationErrors.name = "El nombre es obligatorio";
    }
    if (!data.email) {
      validationErrors.email = "El email es obligatorio";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulario enviado:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <section id="center">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />{" "}
            <br />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />{" "}
            <br />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );

  export default App;
}
