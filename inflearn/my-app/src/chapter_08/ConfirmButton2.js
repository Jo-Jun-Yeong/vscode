import React, { Component } from 'react'

export default class ConfirmButton2 extends Component {
//class fields syntax사용하기
    constructor(props){
        super(props);

        this.state={
            isConfirmed: false,
            //확인 여부 저장 변수
        };

        //1. bind문 제거
        // this.handleConfirm=this.handleConfirm.bind(this);
    }

    //이벤트헨들러
    //2. 이벤트핸들러를 Arrow function으로 변경한다.
    handleConfirm = ()=>{
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
        // alert("나오냐")
    }
  render() {
    return (
      <button 
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}>
            {this.state.isConfirmed ? "확인됨 " : "확인하기"}
      </button>
    )
  }
}
