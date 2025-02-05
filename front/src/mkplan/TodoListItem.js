import React from 'react'

export default function TodoListItem({text=''}) {
  
  return (
    <div>

    {text ? 
      <li>

      <input type='checkbox'/>
      {text}
      <button>삭제</button>

      </li> 
      : <p>"일정이 비어있습니다."</p>
    }
        

    </div>
  )
}
