import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";

import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    // Buscamos el producto por el ID de la URL
    getProductById(id)
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <main className="detail-container">
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};
