import React, { useState } from 'react'

export default function TodoInsert({inputList, setInputList, inputValue, setInputValue}) {


  const changeTodoInput = (e) => {
    setInputValue(e.target.value);
  }

  // 추가
  const addTodo = () => {
    setInputList([...inputList, inputValue]);
    setInputValue(''); //입력값 초기화
  }

  return (
    <div>
      <div>TodoInsert</div>

      <div>
        <input
        type='input' 
        value={inputValue}
        onChange={changeTodoInput}
        placeholder='할 일을 입력하세요'></input>

        <button type='button' onClick={addTodo}>등록</button>
      </div>

      <div>

      </div>
    </div>
  )
}
