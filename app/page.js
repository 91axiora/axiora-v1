"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState("");

  function analyze() {
    if (!name || !dob) {
      setResult("Please enter your name and date of birth.");
      return;
    }

    const numbers = dob.replace(/-/g, "").split("").map(Number);
    const total = numbers.reduce((a, b) => a + b, 0);

    let number = total;
    while (number > 9) {
      number = String(number)
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);
    }

    setResult(`AXIORA Number: ${number}`);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        background: "#080b12",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <h1 style={{ fontSize: 42, marginBottom: 8 }}>AXIORA</h1>

        <p style={{ color: "#9ca3af", marginBottom: 30 }}>
          Advanced Numerology Intelligence System
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: 16,
            marginBottom: 15,
            borderRadius: 10,
            border: "1px solid #333",
            background: "#111827",
            color: "white",
            boxSizing: "border-box",
          }}
        />

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{
            width: "100%",
            padding: 16,
            marginBottom: 20,
            borderRadius: 10,
            border: "1px solid #333",
            background: "#111827",
            color: "white",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={analyze}
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 10,
            border: "none",
            background: "#22c55e",
            color: "#061006",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          ANALYZE
        </button>

        {result && (
          <div
            style={{
              marginTop: 25,
              padding: 20,
              borderRadius: 12,
              background: "#111827",
              border: "1px solid #333",
              fontSize: 20,
            }}
          >
            {result}
          </div>
        )}
      </div>
    </main>
  );
                  }
