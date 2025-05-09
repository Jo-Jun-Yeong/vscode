import React, { useState } from 'react'

export default function useCounter(initialValue) {
  //초기 카운터값을 파라미터로 받아서 count라는 이름의 state를 생성하여 값을 제공하고
  //count의 증가 및 감소를 편리하게 할 수 있는 함수를 제공하는 Hook이다.
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count +1);
    const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

  return (
    [count, increaseCount, decreaseCount]
  )
}

