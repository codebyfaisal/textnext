import React from "react";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/ss");
  if (!response.ok) throw new Error("Network response was not ok");

  const data = await response.json();
  console.log(data);

  return <div>page</div>;
};

export default page;
