import React from 'react';

function PhotoCard(props) {
    console.log("Photocard props", props)
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} /> 
            <p>
                {props.explanation}
            </p>
        </div>
    );
}

export default PhotoCard