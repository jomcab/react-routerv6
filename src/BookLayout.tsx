import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ x:'3' })
  const x = searchParams.get("x")
  return (
    <>
    <Link to="/books/1">Book 1</Link>
    <br />
    <Link to="/books/2">Book 2</Link>
    <br />
    <Link to={`/books/${x}`}>Book {x}</Link>
    <br />
    <Link to="/books/new">New Book</Link>
    <Outlet context={ { varName: "Sample Value"} } />
    <input type="text" value={x?.toString()} onChange={e => setSearchParams({ x: e.target.value })}/>
    </>
  )
}

export default BookLayout