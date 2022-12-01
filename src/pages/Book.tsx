import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Book = () => {
  const params = useParams();
  const oContext: {varName: string} = useOutletContext();

  return (
    <h1>Book {params.id} {oContext.varName}</h1>
  )
}

export default Book