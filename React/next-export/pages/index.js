import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p><Link href="user/1"><a>user1</a></Link></p>
      <p><Link href="user/2"><a>user2</a></Link></p>
      <p><Link href="user/3"><a>user3</a></Link></p>
      <p><Link href="user/4"><a>user4</a></Link></p>
      <p><Link href="user/5"><a>user5</a></Link></p>
    </div>
  )
}
