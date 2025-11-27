import { useState } from "react";

export default function EjemploMouse2() {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <div
      onMouseOver={() => setMostrarDescripcion(true)}
      onMouseOut={() => setMostrarDescripcion(false)}
      style={{
        width: "300px",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "2rem",
      }}
    >
      <p style={{ margin: "0" }}>🍕 Pizza</p>

      {mostrarDescripcion && (
        <p style={{ marginTop: "0.5rem", color: "#555" }}>
          Masa fina con salsa de tomate, mozzarella y albahaca fresca.
        </p>
      )}
    </div>
  );
}
