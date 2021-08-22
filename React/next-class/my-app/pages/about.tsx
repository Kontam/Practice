import { NextPage } from "next";
import { useEffect, useState } from "react";

const About: NextPage = () => {
  const [messages, setMessage] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/messages")
      .then((result) => {
        return result.json();
      })
      .then((json) => setMessage(json));
  }, []);

  return (
    <div>
      <h1>About us</h1>
      <p>{messages.map(m => m.body)}</p>
    </div>
  );
};

export default About;
