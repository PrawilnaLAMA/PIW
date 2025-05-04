import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./utils/firebaseConfig";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Filters from "./components/Filters/Filters";
import Book from "./components/Book/Book";
import "./App.css";
import New from "./Pages/New/New";
import { User } from "firebase/auth";

interface BookI {
  id: string;
  title: string;
  author: string;
  pages: number;
  cover: "Miękka" | "Twarda";
  price: number;
  description: string;
  ownerId: string;
}

function App() {
  const [books, setBooks] = useState<BookI[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookI[]>([]);
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: Infinity,
    cover: "",
    pagesMin: 0,
    pagesMax: Infinity,
    author: "",
  });
  const [user, setUser] = useState<User | null>(null);

  // Fetch books from Firestore
  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollection = collection(db, "books");
      const booksSnapshot = await getDocs(booksCollection);
      const booksData = booksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BookI[];
      setBooks(booksData);
      setFilteredBooks(booksData); // Domyślnie wyświetl wszystkie książki
    };

    fetchBooks();
  }, []);

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle filter changes
  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  // Filter books based on filters
  useEffect(() => {
    const filtered = books.filter((book) => {
      return (
        book.price >= filters.priceMin &&
        book.price <= filters.priceMax &&
        (filters.cover === "" || book.cover === filters.cover) &&
        book.pages >= filters.pagesMin &&
        book.pages <= filters.pagesMax &&
        book.author.toLowerCase().includes(filters.author.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
  }, [filters, books]);

  // Filter books for the logged-in user
  const filterMyBooks = () => {
    if (user) {
      const myBooks = books.filter((book) => book.ownerId === user.uid);
      setFilteredBooks(myBooks);
    } else {
      alert("Musisz być zalogowany, aby zobaczyć swoje książki.");
    }
  };

  return (
    <Router>
      <Navbar user={user} filterMyBooks={filterMyBooks} />
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
          <Route path="/new" element={<New user={user} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;