import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import PhotoCard from './components/PhotoCard';

function App() {
  const [data, setData] = useState({}); 

  axios.get("https://api.nasa.gov/planetary/apod?api_key=f9e9i1Jhoy431QKH984SYBsYDdpA14D9wkfNK1a5")
  .then(response => {
    console.log(response.data);
    setData(response.data);
  })

  return (
    <div className="App">
      <PhotoCard title={data.title} 
                 url={data.url}
                 explanation={data.explanation} />
    </div>
  );
}

export default App;
