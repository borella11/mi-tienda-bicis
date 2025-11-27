import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  //recordamos el uso del children, no es obligatorio que este

  //Si este componente usara children ni botones que generen conflictos,
  // podrian envolver aca con Link (agregando el uso de props "id")
  return (
    <article className="product-item">
      <img src={imageUrl} alt={description} />
      <h2 className="product-title">{name}</h2>
      <p>Precio: ${price}</p>
      <p>Descripcion{description}</p>
      {children}
    </article>
  );
};
