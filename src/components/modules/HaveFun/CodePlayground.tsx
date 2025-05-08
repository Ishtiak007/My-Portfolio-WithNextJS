/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef } from "react";

const defaultHTML = `<!-- Write your HTML here -->
<h1>Hello, World!</h1>
<p>This is a live code editor.</p>`;
const defaultCSS = `/* CSS here */
body {
  font-family: sans-serif;
  color: #333;
  padding: 20px;
}`;
const defaultJS = `// JavaScript here
console.log('Hello from JS!');
`;

export default function CodePlayground() {
  const [html, setHtml] = useState(defaultHTML);
  const [css, setCss] = useState(defaultCSS);
  const [js, setJs] = useState(defaultJS);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const generatePreview = () => {
    const document = iframeRef.current?.contentDocument;
    const fullCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
    if (document) {
      document.open();
      document.write(fullCode);
      document.close();
    }
  };

  useEffect(() => {
    generatePreview();
  }, [html, css, js]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-xl shadow-md my-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">
        🧪 Code Playground
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <h3 className="text-sm font-semibold mb-1 text-black">HTML</h3>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-48 p-2 border rounded-md font-mono text-sm text-black resize-none focus:outline-none focus:ring-0"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-1 text-black">CSS</h3>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full h-48 p-2 border rounded-md font-mono text-sm text-black resize-none focus:outline-none focus:ring-0"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-1 text-black">JavaScript</h3>
          <textarea
            value={js}
            onChange={(e) => setJs(e.target.value)}
            className="w-full h-48 p-2 border rounded-md font-mono text-sm text-black resize-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2 text-black">🔍 Live Preview</h3>
      <div className="border rounded-md overflow-hidden h-64">
        <iframe
          title="Live Preview"
          className="w-full h-full"
          ref={iframeRef}
        />
      </div>
    </div>
  );
}
