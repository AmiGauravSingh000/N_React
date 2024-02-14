import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from react-dom, not react-dom/client

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading from react"
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(heading);