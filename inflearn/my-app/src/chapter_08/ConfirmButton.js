import React, { Component } from 'react'

export default class ConfirmButton extends Component {

    constructor(props){
        super(props);

        this.state={
            isConfirmed: false,
            //확인 여부 저장 변수
        };

        this.handleConfirm=this.handleConfirm.bind(this);
    }

    //이벤트헨들러
    handleConfirm(){
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
