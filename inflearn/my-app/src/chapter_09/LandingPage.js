//useState를 사용하여 사용자의 로그인 여부를 자체적으로 관리한다.
//그리고 이 값을 Tollbar 컴포넌트에 전달하여 적절한 인터페이스를 보여주게한다.. 
import React, { useState } from 'react'
import Toolbar from './Toolbar';

export default function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    } 

    const onCLickLogout = () => {
        setIsLoggedIn(false);
    }

  return (
    <div>
        <Toolbar
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onCLickLogout={onCLickLogout}
        />
        <div style={{padding: 16 }}>리액트 공부!!!!!! </div>
    </div>
  )
}
