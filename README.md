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
* Add new book page
  * update App.tsx to include the <Route> with path="/books/new"
  * update BookList.tsx to include the <Link> for <NewBook> page
* Add a Not Found Page
  * Update App.js and add <Route> with path="*" element={<NotFound />}
* Update book routes to nested routes
  * update App.js routes
  * create BookLayour.tsx with <Outlet>
  * add context to <Outlet>
  * access outlet context value in other components using useOutletContext()
* Move sub routes to Routes.tsx file
  * create BookRoutes.js and transfer the <Route>s code block from App.tsx
  * update app.tsx Route from path="/books" to path='/books/*' on path.