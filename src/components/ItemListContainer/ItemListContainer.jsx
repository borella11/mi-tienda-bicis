import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

import { getProducts } from "../../services/products";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    // Llamamos a la funcion asincrona para traer los productos
    getProducts()
      .then((data) => {
        if (category) {
          // Si hay categoria, filtramos
          setProducts(data.filter((prod) => prod.category === category));
        } else {
          setProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <section className="container">
      <h1>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
};
