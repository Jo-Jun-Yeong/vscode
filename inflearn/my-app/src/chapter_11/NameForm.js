import React, { useState } from 'react'

export default function NameForm(props) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert("입력한 이름: "+ value);
        event.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <input type="text" value={value} onChange={handleChange}/>
        </label>
        <button type="submit">제출</button>
    </form>
  )
}
