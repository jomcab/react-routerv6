# React Router V6

* Install react-router-dom
  * npm i react-router-dom
* Update index.tsx
  * import BrowserRouter
  * wrap <App> component with <BrowserRouter>
* Update App.tsx
  * import { Routes, Route } from "react-router-dom"
  * import Home from './pages/Home';
  * add <Routes> component and multiple <Route> as needed inside it.
  * add <NavLink> components for navigation.
  * add new <Route> for specific book using path="/books/:id"
* Update BookList.tsx
  * add <Link> to book1 and book2
* Update Book.tsx
  * utilize useParams() to get the id from url param
  * render the id