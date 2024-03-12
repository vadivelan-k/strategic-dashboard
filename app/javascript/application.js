// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";

const container = document.getElementById('strategic-home');
const root = ReactDOM.createRoot(container);
root.render(<Home />);
