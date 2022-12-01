import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // or navigate(-1); to go backward once
    }, 1000);
  }, [navigate]);

  return (
    <h1>NotFound</h1>
  )
}

export default NotFound