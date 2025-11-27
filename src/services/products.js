const BASE_URL = "https://6900bc2cff8d792314bb3770.mockapi.io/products";

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("No se pudieron obtener los productos");
  }
  return await res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("No se pudo obtener el producto");
  }
  return await res.json();
};

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};
