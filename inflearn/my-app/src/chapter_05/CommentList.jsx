import React from 'react'
import Comment from './Comment'

const comments =[
    {
        name:"조준영",
        comment:"알바가야한다.."
    },
    {
        name:"박소희",
        comment:"퇴근 시켜 줘!!!"
    },
    {
        name:"조종현",
        comment:"사과 드시는 중"
    }
]

export default function CommentList() {
  return (
    <div>
        {comments.map((comment) => {
            return(
                <Comment name={comment.name} comment={comment.comment}/>
            );
        }) 
        }
    </div>
  )
}
