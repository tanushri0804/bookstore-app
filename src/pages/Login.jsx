import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { Login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        Login(username, password);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;