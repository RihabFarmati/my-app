import React, { useState } from 'react';
import "./Home.css"
import { useEffect } from 'react';
import SnippetBook from './components/SnippetBook';
import ApiService from './services/api-service';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        // Define an async function to fetch books and set the state
        const fetchData = async () => {
            try {
                const fetchedBooks = await ApiService.fetchBooks();
                setBooks(fetchedBooks);
            } catch (error) {
                console.error("Error fetching books:", error);
                navigate("/login")
            }
        };

        // Call the fetchData function
        fetchData();

        // No dependencies array, so this effect runs only once after component mounts

    }, []); // Empty dependency array means this effect runs once after the component mounts


    return (
        <div>
            <h2>Books</h2>
            <section className="book-grid">
                {books && books.length > 0 ? (
                    books.map(book =>
                        <SnippetBook key={book.id} book={book} />
                    )
                ) : (
                    <p>No books available</p>
                )}
            </section>
        </div>
    );
}

export default Home;
