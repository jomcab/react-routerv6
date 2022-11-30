import React from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {
  const params = useParams();

  return (
    <h1>Book {params.id}</h1>
  )
}

export default Book