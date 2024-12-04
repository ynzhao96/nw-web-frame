"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const handleSubmit = async () => {
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ test: "Hello from frontend!" }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div>Full Stack Next.js</div>
      <div>App API Response: {message}</div>
      <div>
        <button
          onClick={handleSubmit}
          className="bg-red"
          style={{ backgroundColor: "red" }}
        >
          submit
        </button>
      </div>
      <div>
        <button onClick={() => (location.href = "/about")}>
          jump to about page
        </button>
      </div>
      <div>Test POST Request</div>
    </>
  );
}
