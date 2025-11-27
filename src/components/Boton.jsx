export const Boton = ({ texto, color }) => {
  const estilos = {
    backgroundColor: color,
    color: "white",
  };

  const saludar = () => {
    alert("Boton clickeado");
  };

  return (
    <button style={estilos} onClick={saludar}>
      {texto}
    </button>
  );
};
