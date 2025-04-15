import React from 'react'
export default function NumberList(props) {

    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number) =>
        <li>{number}</li> 
    );

  return (
    <div>{listItems}</div>
  )

 
}

