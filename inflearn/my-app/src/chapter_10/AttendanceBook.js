import React from 'react'
//students라는 배열로부터 학생정보가 담긴 객체[] 들을 받아
// 목록으로 보여주는 컴포넌트이다.
const students = [
    {
        id:1,
        name:"Jo",
    },
    {
        id:2,
        name:"Jun",
    },
    {
        id:3,
        name:"Yeong",
    },
    {
        id:4,
        name:"Pack",
    },

]
export default function AttendanceBook(props) {
  return (
    <ul>
        {students.map((students) => {
            // return <li key={students.id}>{students.name}</li>
            return <li key={`student-id-${students.id}`}>{students.name}</li>
            //{`student-id-${students.id}`} 문자열로 포맷팅하여 사용
        })}
    </ul>
  );
}

//방법1. index를 사용하여 key값 할당하기
//방법2. student에 자체적인 id값으로 key값 할당하기
//방법3. key를 포맷팅 된 문자열로 변경