import React, { useState } from "react";
import "./AddBook.css";

interface AddBookProps {
  onAddBook: (book: {
    title: string;
    author: string;
    pages: number;
    cover: "Miękka" | "Twarda";
    price: number;
    description: string;
  }) => void;
}

function AddBook({ onAddBook }: AddBookProps) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    pages: 0,
    cover: "Miękka" as "Miękka" | "Twarda", // Ustawienie typu zgodnego z "Miękka" | "Twarda"
    price: 0,
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "pages" || name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook(formData); // Przekazanie danych do funkcji onAddBook
    setFormData({
      title: "",
      author: "",
      pages: 0,
      cover: "Miękka", // Resetowanie do domyślnej wartości
      price: 0,
      description: "",
    });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h1 className="cont-title">Wystaw książkę na sprzedaż</h1>
      <input
        type="text"
        name="title"
        className="book-form-input"
        placeholder="Nazwa książki"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="author"
        className="book-form-input"
        placeholder="Autor"
        value={formData.author}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="pages"
        className="book-form-input"
        placeholder="Ilość stron"
        value={formData.pages}
        onChange={handleInputChange}
        required
      />
      <select
        name="cover"
        className="book-form-input"
        value={formData.cover}
        onChange={handleInputChange}
      >
        <option value="Miękka">Miękka</option>
        <option value="Twarda">Twarda</option>
      </select>
      <input
        type="number"
        name="price"
        className="book-form-input"
        placeholder="Cena"
        value={formData.price}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="description"
        className="book-form-input"
        placeholder="Opis"
        value={formData.description}
        onChange={handleInputChange}
        required
      />
      <button type="submit" className="post">
        WYSTAW
      </button>
    </form>
  );
}

export default AddBook;