'use client';

import React, { useState } from "react";
import { person } from "@/resources";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const body = `From: ${email}\n\n${message}`;
    const mailto = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div style={{
      background: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(8px)",
      borderRadius: "1rem",
      padding: "2rem",
      maxWidth: "500px",
      margin: "2rem auto",
      boxShadow: "0 8px 24px rgba(0,0,0,0.7), inset 0 1px 2px rgba(255,255,255,0.1)",
      color: "#f0f0f0",
    }}>
      <h2 style={{ marginBottom: "0.5rem" }}>Contact Me</h2>
      <p style={{ marginBottom: "1.5rem", color: "#ccc" }}>
        Feel free to reach out with any questions or comments.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            background: "rgba(18, 18, 18, 0.7)",
            border: "1px solid #333",
            borderRadius: "0.5rem",
            padding: "0.75rem 1rem",
            color: "#f0f0f0",
            outline: "none",
          }}
          onFocus={(e) => e.target.style.boxShadow = "0 0 5px rgba(240,240,240,0.2)"}
          onBlur={(e) => e.target.style.boxShadow = "none"}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
          style={{
            background: "rgba(18, 18, 18, 0.7)",
            border: "1px solid #333",
            borderRadius: "0.5rem",
            padding: "0.75rem 1rem",
            color: "#f0f0f0",
            outline: "none",
          }}
          onFocus={(e) => e.target.style.boxShadow = "0 0 5px rgba(240,240,240,0.2)"}
          onBlur={(e) => e.target.style.boxShadow = "none"}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          style={{
            background: "rgba(18, 18, 18, 0.7)",
            border: "1px solid #333",
            borderRadius: "0.5rem",
            padding: "0.75rem 1rem",
            color: "#f0f0f0",
            outline: "none",
            minHeight: "100px",
            resize: "vertical",
          }}
          onFocus={(e) => e.target.style.boxShadow = "0 0 5px rgba(240,240,240,0.2)"}
          onBlur={(e) => e.target.style.boxShadow = "none"}
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #333, #000)",
            color: "#f0f0f0",
            border: "1px solid #444",
            borderRadius: "0.5rem",
            padding: "0.75rem",
            cursor: "pointer",
            transition: "background 0.3s, transform 0.2s",
          }}
          onMouseOver={(e:any) => {
            e.target.style.background = "linear-gradient(90deg, #444, #111)";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e:any) => {
            e.target.style.background = "linear-gradient(90deg, #333, #000)";
            e.target.style.transform = "none";
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
