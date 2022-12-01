import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom"
import BookLayout from './BookLayout';
import Book from './pages/Book';
import BookList from './pages/BookList';
import Home from './pages/Home';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';

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
      {/* <Route path="/books" element={<BookList />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="/books/new" element={<NewBook />} /> */}
      <Route path="/books" element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App;
