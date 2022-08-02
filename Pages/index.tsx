// index.html
import React from 'react';
import { useState } from 'react';
import {
  Header
} from '../Components';

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Delop. Fuck. yuu. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{`${name}`}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}