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
    let pieces, first, second;
    let result = count;

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
        } else if (symbols[i] == "÷") {
          result = first / second;
        } 
      }
      }
      setCount(String(result));
    }

    function handlesDigit(digit) {
      //1. Button pressed sends parameter to function so it knows which digit was pressed
      //2. If a digit was pressed first, then replace the 0 with the digit, if 0 was pressed, then it just basically does nothing - replaces w 0
      //3. If a . or symbol is pressed, then glue it to the 0

      if (count == "0") {
        setCount(digit)
      } else {
        setCount(count + digit)
      }
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
          <button onClick={() => handlesDigit("1")}>1</button>
          <button onClick={() => handlesDigit("2")}>2</button>
          <button onClick={() => handlesDigit("3")}>3</button>
        </div>

        <div>
          <button onClick={() => handlesDigit("4")}>4</button>
          <button onClick={() => handlesDigit("5")}>5</button>
          <button onClick={() => handlesDigit("6")}>6</button>
        </div>

        <div>
          <button onClick={() => handlesDigit("7")}>7</button>
          <button onClick={() => handlesDigit("8")}>8</button>
          <button onClick={() => handlesDigit("9")}>9</button>
        </div>

        <div>
          <button onClick={() => setCount(count + ".")}>.</button>
          <button onClick={() => handlesDigit("0")}>0</button>
          <button onClick={() => setCount(count + "%")}>%</button>
        </div>
      </div>
    </>
  )
}

export default App
