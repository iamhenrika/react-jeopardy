import { useState } from "react";

export default function Score({ question }) {
  const [count, setCount] = useState(0);

    return (
      <div className='Score'>
        <h1>Score: <span>{count}</span></h1>
        <div className="Score-buttons">
          <button onClick={() => setCount(count - question.value)}>
            Decrease
          </button>
          <button onClick={() => setCount(count + question.value)}>
            Increase
          </button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <h1>Let's Play!</h1>
      </div>
      
    );
    
  }