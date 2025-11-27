import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <AuthProvider>
            <Header />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer titulo={"Bienvenidos"} />}
              />
              <Route
                path="/category/:category"
                element={<ItemListContainer titulo={"Bienvenidos"} />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <ProductFormContainer />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </AuthProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
