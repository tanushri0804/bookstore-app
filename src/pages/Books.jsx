import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("https://walnut-dour-pilot.glitch.me/books")
        .then(res => setBooks(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Books</h2>
            {books.map(book => (
                <div key={books.id}>
                    <link to={'/books/${book.id}'}>{book.name}</link> - ${book.price}
                </div>
            ))}
        </div>
    );
};

export default Books;