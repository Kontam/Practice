import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TodoList from '../src/components/TodoList'
const Home: NextPage = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default Home
