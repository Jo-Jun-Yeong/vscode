import React from 'react'
import TodoListItem from './TodoListItem'

export default function TodoList({inputList}) {
  return (
    <div>
      <div>계획 리스트</div>
      <div>
        
        <ul>
          {
            inputList.map((item, index)=> (
              <TodoListItem key={index} text={item}/>
            ))
          }

        </ul>
        
      
      </div>
    </div>
  )
}
