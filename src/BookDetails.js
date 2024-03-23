import React, { useState } from 'react';
import "./BookDetails.css"
import { useLocation } from 'react-router-dom';

function BookDeatils() {
    const location = useLocation();
    const { book } = location.state;

    return (
        <div className="book-detail-style">
            <h2>{book.title}</h2>
            <p>Author: {book.auth}</p>
            <p>Price: ${book.price}</p>
            <p>Description: {book.description}</p>
            <img src="book.png" alt={book.title} className="book-image-style" />
        </div>
    );
}

export default BookDeatils;