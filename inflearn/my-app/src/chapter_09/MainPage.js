import React, { useState } from 'react'
import WarningBanner from './WarningBanner';

export default function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(preShowWaring => !preShowWaring);
    }
  return (
    <div>
        <div>
            <WarningBanner  warning={showWarning}/>
        </div>
        <button onClick={handleToggleClick}>
            {showWarning ? "감추기" : "보이기"}
        </button>

    </div>
  )
}
