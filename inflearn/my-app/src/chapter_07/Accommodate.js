import React, { useEffect, useState } from 'react'
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

export default function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    }); //의존성 배열x

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]); 
    //의존성 배열o 즉 마운트가 되고 {count}값이 변경될 때 호출된다.

  return (
    <div style={{ padding: 16 }}>
        <p>{`총 ${count}명 수용했습니다.`}</p>

        <button onClick={increaseCount} disabled={isFull}>
            입장
        </button>
        <button onClick={decreaseCount}>
            퇴장
        </button>

        {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>}
    </div>
  )
}
