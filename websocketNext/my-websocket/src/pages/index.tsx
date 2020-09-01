import { NextPage } from 'next';
import io from "socket.io-client";

const Home:NextPage = () => {
  const socket = io();
  return (
    <h1>hello world</h1>
  )
}

export default Home;
