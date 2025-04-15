import React, { useState } from 'react'

export default function Counter() {

const [count, setCount] = useState(0);

const handleIncreaseCount = () => {
    setCount( () => count +1)
}

const handleDecreaseCOunt =() => {
    setCount( () => count -1);
}
  return (
    <div>
        <button onClick={handleIncreaseCount}>
            count증가
        </button>
        {<h1>{count}</h1> && <h1>현재 카운터: {count}</h1>}
        <button onClick={handleDecreaseCOunt}>
            count감소
        </button>
    </div>
  )
}
