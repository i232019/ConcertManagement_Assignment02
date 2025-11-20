import React, { useState } from "react";

export default function Aichat() {

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: input }],
        }),
      });

      const data = await res.json();
      console.log(data);

      setResponse(
        data?.choices?.[0]?.message?.content || "No response."
      );
    } catch (err) {
      setResponse("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h1>AI Chat</h1>

      <textarea
        rows="4"
        style={{ width: "100%", padding: "10px" }}
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={sendMessage}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      {response && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f0f0f0",
            borderRadius: "6px",
          }}
        >
          <strong>AI Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
