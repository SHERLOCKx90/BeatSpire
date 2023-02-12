
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Card from './card';



const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.spotify.com/v1/tracks?ids=0TnOYISbd1XYRBk9myaseg%2C5uCax9HTNlzGybIStD3vDh%2C2takcwOaAZWiXQijPHIx7B',
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN}`,
          },
        }
      );
      setSongs(result.data.tracks);
    };

    fetchData();
  }, []);

  return (
    <div>
      {songs.map((song) => (
        <Card
          key={song.id}
          album={song.album.name}
          artist={song.artists[0].name}
          image={song.album.images[0].url}
          name={song.name}
          id={song.id}
        />
      ))}
    </div>
  );
};

export default Home;
