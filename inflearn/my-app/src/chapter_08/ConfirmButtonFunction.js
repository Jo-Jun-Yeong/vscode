import React, { useState } from 'react'

export default function ConfirmButtonFunction() {

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((preveIsConfirmed) => !preveIsConfirmed)
  }

  return (
    <button 
      onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  )
}
