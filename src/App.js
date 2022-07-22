import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import PhotoCard from './components/PhotoCard';
import styled from 'styled-components';

const FlexDiv = styled.div`
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: center;u
`

const AppDiv = styled.div`
width: 800px;
margin: 0 auto;
`

const StyledH1 = styled.h1`
font-family: monospace;
font-size: 2.1rem;
margin: 50px 0 40px 0;
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
      <StyledH1>Nasa Photo of the Day</StyledH1>
      <FlexDiv>
        {photos.map(data => (
          <PhotoCard title={data.title} 
                    url={data.url}
                    explanation={data.explanation}
                    date={data.date}
                    media_type={data.media_type}
                    key={data.title} />
        ))}
      </FlexDiv>
    </AppDiv>
  );
}

export default App;
