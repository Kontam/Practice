import { NextPage } from "next";

const About: NextPage = (props: any) => {
  return (
    <div>
      <h1>About us</h1>
      <p>{props.data.map(m => m.body)}</p>
    </div>
  );
};

export async function getStaticProps() {
  const result = await fetch("http://localhost:3000/api/messages")
  return {
    props: {
      data: await result.json()
    }
  }
}

export default About;
