import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <nav>
            <link to="/">Home</link>
            {user && <link to="/books">Books</link>}
            {!user ? <link to="/login">Login</link> : <button onClick={logout}>Logout</button>}
        </nav>
    );
};

export default Navbar;