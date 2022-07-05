import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h2>Under Development</h2>
        <p>
          Reach me:
        </p>
        <p>
        <a
            className="App-link"
            href="mailto:m.alifdarmamulia@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-mail
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://www.linkedin.com/in/muhammad-alif-d-4aaa561a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://www.instagram.com/aliefdharm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://github.com/alif338/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
