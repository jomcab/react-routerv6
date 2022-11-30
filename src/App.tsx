import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom"
import Book from './pages/Book';
import BookList from './pages/BookList';
import Home from './pages/Home';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/books">Books</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/books/:id" element={<Book />} />
    </Routes>
    </>
  )
}

export default App;
