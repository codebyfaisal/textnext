import React from "react";

const page = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/ss"
    );
    if (!response.ok)
      throw new Error(`Failed to fetch data: ${response.status}`);

    const data = await response.json();
    console.log(data);

    return <div>page</div>;
  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Error fetching data. Please try again later.</div>;
  }
};

export default page;
