import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Photo from "./Photo";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  const fetchImages = async () => {
    let url;
    url = `${mainUrl}?client_id=sScaMD6EiQINBRNWxbaoprVTHSOL26PWIfx38G-obbE`

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
