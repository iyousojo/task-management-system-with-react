import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

 ReactDOM.createRoot(document.getElementById('root')).render(<App />);
 const rootEl = document.getElementById('root');
 console.log('🔍 rootEl:', rootEl);
 console.log('🔗 BASE_URL:', import.meta.env.BASE_URL);
 if (rootEl) {
   ReactDOM.createRoot(rootEl).render(
     <>
       {console.log('🚀 React is mounting!')}
      <App />
    </>
  );
}


