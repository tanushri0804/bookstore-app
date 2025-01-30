import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get('https://walnut-dour-pilot.glitch.me/books/${id}')
        .then(res => setBook(res.data))
        .catch(err => console.error(err));
    }, [id]);

    if (!book) return <p>Loading....</p>;

    return (
        <div><h2>{book.name}</h2>
        <p>Category: {book.category}</p>
        <p>Price: ${book.price}</p>
        </div>
    );
};

export default BookDetail;