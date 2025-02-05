import React, { useState } from 'react'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'
import TodoListItem from './TodoListItem'

export default function TodoTemplate() {

  const [inputValue, setInputValue] = useState(''); //입력값
  const [inputList, setInputList] = useState([]);// 입력값리스트



  return (
    <div style={{border:'solid', width:'70%'}}>
        <div>TodoTemplate</div>
        <hr/>
        <TodoInsert 
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputList={inputList}
        setInputList={setInputList}
        />
        <hr/>
        <TodoList inputList={inputList}>
          <TodoListItem/>
        </TodoList>
    </div>
  )
}
