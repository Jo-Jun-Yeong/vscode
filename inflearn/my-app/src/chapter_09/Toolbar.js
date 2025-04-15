//사용자의 로그인 여부를 나타내는 isLoggedin을 props로 받아서
//조건부 렌더링을 사용하여 환영 메시지를 표시하거나 감추고 login logou을 보여준다.

import React from 'react'

const styles={
    wrapper:{
        padding: 16,
        display:"flex",
        flexDirection:"row",
        borderBottom: "1px solid grey"
    },
    greeting:{
        marginRight: 8,
    }

}

export default function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onCLickLogout} = props;
  return (
    <div style={styles.wrapper}>
        {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

        {isLoggedIn 
            ? 
        (
            <button onClick={onCLickLogout}>로그아웃</button>
        )   :
        (
            <button onClick={onClickLogin}>로그인</button>
        )}
    </div>
  )
}
