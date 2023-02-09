import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Photo from "./Photo";

const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  const fetchImages = async () => {
    let url;
    url = `${mainUrl}${clientId}`

    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImages()
  },[])

  return (
    <>
      <h1>Stock Photos</h1>
    </>
  );
}

export default App;
