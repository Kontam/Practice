import {NextPage} from 'next';
import { useState } from 'react';
import io from 'socket.io-client';

const Home: NextPage = () => {
  const socket = io();
  const onClick = (word: string) => {socket.emit('hello', word)}
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
