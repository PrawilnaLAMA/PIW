import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Filters from "./components/Filters/Filters";
import Book from "./components/Book/Book";
import "./App.css";
import New from "./Pages/New/New";

interface BookI {
  id: number;
  title: string;
  author: string;
  pages: number;
  cover: "Miękka" | "Twarda";
  price: number;
  description: string;
}

function App() {
  const [books, setBooks] = useState<BookI[]>([
    {
      id: 1,
      title: "Wiedźmak",
      author: "Andrzej Sapkowski",
      pages: 320,
      cover: "Miękka",
      price: 25,
      description: "Fantastyczna opowieść o wiedźminie Geralcie.",
    },
    {
      id: 2,
      title: "Hobbit",
      author: "J.R.R. Tolkien",
      pages: 310,
      cover: "Twarda",
      price: 35,
      description: "Przygody Bilba Bagginsa w Śródziemiu.",
    },
  ]);

  const handleAddBook = (newBook: Omit<BookI, "id">) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      { id: prevBooks.length + 1, ...newBook },
    ]);
  };

  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: Infinity,
    cover: "",
    pagesMin: 0,
    pagesMax: Infinity,
    author: "",
  });

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.price >= filters.priceMin &&
      book.price <= filters.priceMax &&
      (filters.cover === "" || book.cover === filters.cover) &&
      book.pages >= filters.pagesMin &&
      book.pages <= filters.pagesMax &&
      book.author.toLowerCase().includes(filters.author.toLowerCase())
    );
  });

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters onFilterChange={handleFilterChange} />
                <Book books={filteredBooks} />
              </>
            }
          />
          <Route path="/new" element={<New onAddBook={handleAddBook} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;