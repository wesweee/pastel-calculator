import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>{count}</p>

        <div>
          <button>+</button>
          <button>-</button>
        </div>

        <div>
          <button>=</button>
        </div>

        <div>
          <button>÷</button>
          <button>×</button>
        </div>

        <div>
          <button onClick={() => setCount(1)}>1</button>
          <button onClick={() => setCount(2)}>2</button>
          <button onClick={() => setCount(3)}>3</button>
        </div>

        <div>
          <button onClick={() => setCount(4)}>4</button>
          <button onClick={() => setCount(5)}>5</button>
          <button onClick={() => setCount(6)}>6</button>
        </div>

        <div>
          <button onClick={() => setCount(7)}>7</button>
          <button onClick={() => setCount(8)}>8</button>
          <button onClick={() => setCount(9)}>9</button>
        </div>

        <div>
          <button>.</button>
          <button>0</button>
          <button>%</button>
        </div>
      </div>

      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </>
  )
}

export default App
