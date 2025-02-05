import React from 'react'

export default function TodoListItem({text}) {
  
  return (
    <div>
        <li>
          {text}  
          <button>삭제</button>
        </li>

    </div>
  )
}
