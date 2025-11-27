import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            login({ username });
            navigate("/admin");
        } else {
            setError("Credenciales inválidas");
        }
    };

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px", margin: "0 auto" }}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: "0.5rem" }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: "0.5rem" }}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" style={{ padding: "0.5rem", cursor: "pointer" }}>Ingresar</button>
            </form>
        </div>
    );
};
