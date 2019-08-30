import React from 'react';
import styled from 'styled-components';

const PhotoCardDiv = styled.div`
display: inline-block;
width: 600px;
height: auto;
margin: 20px;
padding: 80px;
border-radius: 15px;
background: rgb(226,233,235);
background: linear-gradient(333deg, rgba(226,233,235,1) 0%, rgba(176,183,184,1) 100%);
box-shadow: 10px 10px 5px lightgrey;
`

const ResponsiveImg = styled.img`
width: 90%;
height: auto;
max-width: 500px;
border-radius: 10px;
`

const WhiteDiv = styled.div`
background-color: white;
border-radius: 10px;
padding: 40px;
overflow: auto;
height: auto;
`

const StyledP = styled.p`
font-family: monospace;
font-size: 1rem;
`

const StyledH2 = styled.h2`
font-family: monospace;
font-size: 2rem;
`

function PhotoCard(props) {
    console.log("Photocard props", props)
    return (
        <PhotoCardDiv>
            <WhiteDiv>
                <StyledH2>{props.title}</StyledH2>
                <ResponsiveImg src={props.url} /> 
                <StyledP>
                    {props.explanation}
                </StyledP>
            </WhiteDiv>
        </PhotoCardDiv>
    );
}

export default PhotoCard