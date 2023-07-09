import { NextPage } from "next";
import { Suspense } from "react";
import Loading from "./loading";

export const Todos: NextPage = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <h1>Todos</h1>
      </Suspense>
    </main>
  );
};

export default Todos;
