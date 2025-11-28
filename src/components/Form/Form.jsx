import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`${user.name} ingreso su correo y contraseña`);

    alert(`${user.name} ingreso su correo y contraseña`);
    setUser({ name: "", email: "", pass: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Ingresa tu email"
        required
      />
      <input
        type="password"
        name="pass"
        value={user.pass}
        onChange={handleChange}
        placeholder="Ingresa contraseña"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
