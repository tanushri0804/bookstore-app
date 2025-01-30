import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const Navigate = useNavigate();
    const login = async (username, password) => {
        try {
            const res = await fetch ("https://walnut-dour-pilot.glitch.me", {
                method: "POST",
                headers: { "Content-Type": "applocation/json" },
                body: JSON.stringify({username,password}),
            });
            const data = await res.json();
            if (data.success) {
                setUser({ username, token: data.token});
                localStorage.setItem("token", data.token);
                Navigate("/books");
            } else {
                throw new Error("Invalid credentials");
            }
        } catch (error) {
            alert(error.message);
        }
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
        Navigate("/login");
    }
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);