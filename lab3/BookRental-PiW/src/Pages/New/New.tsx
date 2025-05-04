import React from "react";
import "./New.css";
import AddBook from "../../components/AddBook/AddBook";

interface NewProps {
  onAddBook: (book: {
    title: string;
    author: string;
    pages: number;
    cover: "Miękka" | "Twarda";
    price: number;
    description: string;
  }) => void;
}

function New({ onAddBook }: NewProps) {
  return <AddBook onAddBook={onAddBook} />;
}

export default New;