import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";

import "./Cart.css";

export const Cart = () => {
  const { cart, clearCart, deleteItem, total, checkout } = useCartContext();

  return (
    <section className="item-list-container">
      <h2>Carrito de compras</h2>

      {cart.length ? (
        cart.map((prod) => (
          <Item key={prod.id} {...prod}>
            <span>Cantidad: {prod.quantity}</span>
            <button className="btn" onClick={() => deleteItem(prod.id)}>
              Eliminar
            </button>
          </Item>
        ))
      ) : (
        <p>Tu carrito está vacío</p>
      )}

      {cart.length ? (
        <div className="btn-container">
          <div className="total-pagar">
            <p>Total a pagar: ${total()}</p>
          </div>
          <button className="btn" onClick={checkout}>
            Finalizar compra
          </button>
          <button className="btn" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      ) : (
        <Link className="btn" to="/">
          Volver al inicio
        </Link>
      )}
    </section>
  );
};
