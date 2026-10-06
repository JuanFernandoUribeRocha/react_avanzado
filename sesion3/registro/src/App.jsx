import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workshops: [],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        const workshops = checked
          ? [...prevData.workshops, value]
          : prevData.workshops.filter((workshop) => workshop !== value);
        return { ...prevData, workshops };
      });
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <section id="center">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Talleres:</label>
              <div>
                <input
                  type="checkbox"
                  name="workshop"
                  value="React básico"
                  onChange={handleChange}
                />
                <label for="React básico">Taller React Básico</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="workshop"
                  value="React avanzado"
                  onChange={handleChange}
                />
                <label for="React avanzado">Taller React Avanzado</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="workshop"
                  value="JavaScript"
                  onChange={handleChange}
                />
                <label for="JavaScript">Taller JavaScript</label>
              </div>
            </div>
            <button type="submit">Registrar</button>
          </form>
        ) : (
          <div>
            <h2>Confirmación de Registro</h2>
            <p>Nombre: {formData.name}</p>
            <p>Talleres: </p>
            <ul>
              {formData.workshops.map((workshop, index) => (
                <li key={index}>{workshop}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
