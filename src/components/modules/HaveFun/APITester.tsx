"use client";

import { useState } from "react";

const methods = ["GET", "POST", "PUT", "DELETE"];

export default function APITester() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: method !== "GET" && method !== "DELETE" ? body : undefined,
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">
        🌐 API Tester
      </h2>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="border rounded-md px-4 py-2 text-black cursor-pointer"
        >
          {methods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter API URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md text-black"
        />

        <button
          onClick={sendRequest}
          disabled={loading}
          className="bg-fuchsia-600 text-white px-4 py-2 rounded-md hover:bg-fuchsia-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      {method !== "GET" && method !== "DELETE" && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1 text-black">
            Request Body (JSON)
          </h4>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full h-32 p-2 border rounded-md font-mono text-sm text-black focus:outline-none focus:ring-0"
            placeholder='{"key": "value"}'
          />
        </div>
      )}

      {response && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-1 text-black">Response</h4>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm text-black">
            {response}
          </pre>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}
