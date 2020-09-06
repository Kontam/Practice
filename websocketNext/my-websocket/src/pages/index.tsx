import {NextPage} from 'next';
import { useState } from 'react';
import io from 'socket.io-client';

const Home: NextPage = () => {
  const socket = io('http://localhost:3000', {query: 'name=kontam'});

  const onClick = (word: string) => {
  }
  socket.on('ferret', (name, fn) => {
    fn('woot');
  });

  const [word, setWord] = useState("");

  return (
    <>
      <h1>hello world</h1>
      <input type="text" value={word} onChange={(e) => {
        setWord(e.target.value);
      }} />
      <button name="hello" value="hello" onClick={() => {onClick(word)}}>hello!</button>
    </>
  );
};

export default Home;
