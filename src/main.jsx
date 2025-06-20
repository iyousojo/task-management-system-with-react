import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1. Grab the root element
const rootEl = document.getElementById('root');
console.log('rootEl:', rootEl);           // ➜ DevTools should log the <div id="root">
console.log('BASE_URL:', import.meta.env.BASE_URL); // ➜ Should be "/task-management-system-with-react/"

if (rootEl) {
  // 2. Create a React root and render your App
  ReactDOM.createRoot(rootEl).render(
    <>
      {console.log('🚀 React mounting!')}  {/* ➜ Should log at startup */}
      <App />
    </>
  );
}

