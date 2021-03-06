import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Naman!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((count) => count + 100)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <div
          style={{
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '8px 10px #e9e9e9',
            minHeight: '400px',
            flexDirection: 'column',
            gap: '20px',
            padding: 20,
          }}
        >
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#344054' }}>
            Hello beta
          </div>
          <div style={{ fontSize: '18px', fontWeight: 500, color: '#344054' }}>
            Welcome Here
          </div>
          <div style={{ fontSize: '24px', fontWeight: 400, color: '#344054' }}>
            This is one of the greatest counter
          </div>
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
