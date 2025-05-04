// import React from "react";
import "./New.css";
import AddBook from "../../components/AddBook/AddBook";
import { User } from "firebase/auth";

interface NewProps {
  user: User | null; // Dodano właściwość user
}

function New({ user }: NewProps) {
  return <AddBook user={user} />; // Przekazanie user do AddBook
}

export default New;