import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(res.data.items || []);
    } catch (err) {
      console.error("Failed to fetch books:", err);
      setBooks([]);
    }
  };

  return (
    <div className="SearchSection" id="search">
      <h2>Search Any Book</h2>
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Enter book name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="SearchResults">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div className="BookCard" key={index}>
              <img
                src={
                  book.volumeInfo?.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150"
                }
                alt={book.volumeInfo?.title || "Book Cover"}
              />
              <h4>{book.volumeInfo?.title || "No Title"}</h4>
              <p>{book.volumeInfo?.authors?.join(", ") || "Unknown Author"}</p>
              {book.volumeInfo?.previewLink && (
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read
                </a>
              )}
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};
