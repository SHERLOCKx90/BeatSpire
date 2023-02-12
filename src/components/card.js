

import React from 'react';
const Card = ({ album, artist, image, name, id }) => (
    <div>
        <img src={image} alt={name} />
        <p>Album: {album}</p>
        <p>Artist: {artist}</p>
        <p>Name: {name}</p>
        <a href={`https://open.spotify.com/track/12Us8e6NFesdkXKf4StU1I`}>Listen on Spotify</a>
    </div>
);

export default Card;