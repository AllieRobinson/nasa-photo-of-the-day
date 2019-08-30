import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import PhotoCard from './components/PhotoCard';
import styled from 'styled-components';

const AppDiv = styled.div`
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: center;
`

function App() {
  const [photos, setPhotos] = useState([]); 

  useEffect(() => {
    axios.get("https://henry-mock-nasa-api.herokuapp.com/api")
    .then(response => {
      console.log(response.data);
      setPhotos(response.data);
    })
  }, []);

  return (
    <AppDiv className="App">
      {photos.map(data => (
        <PhotoCard title={data.title} 
                   url={data.url}
                   explanation={data.explanation} />
      ))}
    </AppDiv>
  );
}

export default App;
