import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

console.log("React app starting...");

try {
  const rootElement = document.getElementById("root");
  console.log("Root element found:", rootElement);
  
  const root = ReactDOM.createRoot(rootElement);
  console.log("React root created");
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log("App rendered successfully");
} catch (error) {
  console.error("Error starting React app:", error);
  document.getElementById("root").innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial, sans-serif;">
      <h1>Error Loading Portfolio</h1>
      <p>Error: ${error.message}</p>
      <p>Please check the browser console for more details.</p>
    </div>
  `;
}