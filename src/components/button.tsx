import React, { useEffect } from "react";

const ExampleComponent = () => {};

type Colors = "red" | "blue" | "green";

interface Props {
  backgroundColor: Colors;
  fontSize: number | string;
  pillShape?: boolean;
}

export const Button = ({ backgroundColor, fontSize, pillShape }: Props) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data: unknown) => {
        // Issue is data is of type any. We don't want that but can't really trust the response shape either. The solution is to give it a type of unknown
      });
  });

  return <button className="">Click Me</button>;
};
