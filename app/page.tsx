"use client";

import { useState } from "react";

function Homes() {
  const [a, setA] = useState(0);

  return (
    <div className="font-[family-name:var(--font-philosopher-sans)]">
      <h1 className="font-normal text-6xl">Hi</h1>
      {a}
      <button
        type="button"
        onClick={() => setA(a + 1)}
        className="cursor-pointer"
      >
        Go
      </button>
    </div>
  );
}

export default Homes;
