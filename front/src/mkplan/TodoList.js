import React from 'react'
import TodoListItem from './TodoListItem'

export default function TodoList({inputList}) {
  return (
    <div>
      {inputList.length ===0 ? (
        <p>일정이 비어있습니다.</p>
      ) : (
        <ul>
        {
          
          inputList.map((item, index)=> (
            <TodoListItem key={index} text={item}/>
          ))
        }
      </ul>
      )}
    </div>
  )
}
