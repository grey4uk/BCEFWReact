import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const title = React.createElement('h1', {}, 'Hello world');
// const link = React.createElement(
//   'a',
//   { href: 'https://www.google.com' },
//   'google'
// );

// const Description = () => {
//   return <p>I'm description</p>;
// };
// const Description = () => <p>I'm description</p>;

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  // <Description />
  // link
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
