import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("0") //Starting it as a text (for concatenation so future numbers pressed are appended

  function handlesEqual() {
    //1. Cut string at symbol (.split())
    //2. Grab parts (first number then second number): pieces[0] and pieces[1]
    //3. Convert from string to integers
    //4. If + then add, if - then subtract, if x then multiply, if ÷ then divide
    //5. Compute then display result

    const symbols = ["+", "-", "×", "÷"];
    let pieces, result, first, second;

    for (let i = 0; i < symbols.length; i++) {
      if (count.includes(symbols[i]))  {
        pieces = count.split(symbols[i])
        first = Number(pieces[0])
        second = Number(pieces[1])

        if (symbols[i] == "+") {
          result = first + second;
        } else if (symbols[i] == "-") {
          result = first - second;
        } else if (symbols[i] == "×") {
          result = first * second;
        } else {
          result = first / second;
        }
      }
    }

    setCount(String(result));
    }

  return (
    <>
      <div>
        <p>{count}</p>

        <div>
          <button onClick={() => setCount(count + "+")}>+</button>
          <button onClick={() => setCount(count + "-")}>-</button>
        </div>

        <div>
          <button onClick={handlesEqual}>=</button>
        </div>

        <div>
          <button onClick={() => setCount(count + "÷")}>÷</button>
          <button onClick={() => setCount(count + "×")}>×</button>
        </div>

        <div>
          <button onClick={() => setCount(count + "1")}>1</button>
          <button onClick={() => setCount(count + "2")}>2</button>
          <button onClick={() => setCount(count + "3")}>3</button>
        </div>

        <div>
          <button onClick={() => setCount(count + "4")}>4</button>
          <button onClick={() => setCount(count + "5")}>5</button>
          <button onClick={() => setCount(count + "6")}>6</button>
        </div>

        <div>
          <button onClick={() => setCount(count + "7")}>7</button>
          <button onClick={() => setCount(count + "8")}>8</button>
          <button onClick={() => setCount(count + "9")}>9</button>
        </div>

        <div>
          <button onClick={() => setCount(count + ".")}>.</button>
          <button onClick={() => setCount(count + "0")}>0</button>
          <button onClick={() => setCount(count + "%")}>%</button>
        </div>
      </div>
    </>
  )
}

export default App
