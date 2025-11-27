import { useState } from "react";

export const Form2 = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Funciona!! Estado: ${nombre}, ${email}`);
    setNombre("");
    setEmail("");
    setPass("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={nombre}
        placeholder="Ingrese su nombre..."
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Ingrese su email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="pass"
        value={pass}
        placeholder="Ingrese su contraseña..."
        onChange={(e) => setPass(e.target.value)}
      />
      <input type="submit" value={"Enviar"} />
    </form>
  );
};
