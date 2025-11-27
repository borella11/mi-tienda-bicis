import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //Forma de actualizar un estado de forma directa:
    setUser({ ...user, [name]: value });

    /*Forma de actualizar un estado con el valor "previo" a mi actualizacion: por convencion, se le llama "prev" o "prevEstado"
    Esta forma utiliza una funcion con un parametro que siempre traera el ultimo valor del estado
    antes de actualizar con lo nuevo*/

    //setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`${user.name} ingreso su correo y contraseña`);

    //reseteamos los campos que tomaran los values de los inputs
    setUser({ name: "", email: "", pass: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name" //necesitamos el atributo name
        value={user.name}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
        required
      />
      <input
        type="email"
        name="email" //necesitamos el atributo name
        value={user.email}
        onChange={handleChange}
        placeholder="Ingresa tu email"
        required
      />
      <input
        type="password"
        name="pass" //necesitamos el atributo name
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
