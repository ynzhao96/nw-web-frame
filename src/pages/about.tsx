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
      <div>About Page</div>
      <div>App API Response: {message}</div>
      <button onClick={handleSubmit}>submit</button>
      <div>Test POST Request</div>
    </>
  );
}
