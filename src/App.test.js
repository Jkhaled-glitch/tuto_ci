import React from "react";
import ReactDOM from "react-dom"
import App from './App';

test('render App', () => {
  const div = ReactDOM.createRoot(document.createElement("div"))
  div.render(<App />)
});
