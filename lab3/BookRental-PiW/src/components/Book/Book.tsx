import React from 'react';
import './Book.css';
import BookAnnouncement from './BookAnnouncement';
import { Link } from 'react-router-dom';
interface Book {
  id: number;
  title: string;
  author: string;
  pages: number;
  cover: 'Miękka' | 'Twarda';
  price: number;
  description: string;
}

interface BookProps {
  books: Book[];
}

const Book: React.FC<BookProps> = ({ books }) => {
  return (
    <div className="book-announcements">
      {books.map((book) => (
        <BookAnnouncement
          key={book.id}
          title={book.title}
          author={book.author}
          pages={book.pages}
          cover={book.cover}
          price={book.price}
          description={book.description}
          onDelete={() => {}}
        />
      ))}
      {/* Dodanie przycisku na dole */}
      <div className="add-book-button-container">
        <Link to="/new" className="add-book-button">
          Dodaj książkę
        </Link>
      </div>
    </div>
  );
};

export default Book;