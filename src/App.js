/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [title,setTitle] = useState(['남자 코트 추천', '우동 맛집','부산 여행 코스']);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  function change_title(){
    var newArray = [...title]; // ...은 딥카피
    if (newArray[0] == '남자 코트 추천'){
      newArray[0] = '여자 코트 추천';
    }
    else {
      newArray[0] = '남자 코트 추천';
    }
    
    setTitle(newArray);
    //setTitle(['여자 코트 추천', '우동 맛집','부산 여행 코스']);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'purple'}}>개발 Blog</div>
      </div>
      <button onClick={change_title}>Swapping</button>
      <div className="list">
        <h3>{title[0]} <span onClick={()=>{setNum(num + 1)}}>👍🏻</span> {num}  </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[1]} <span onClick={() =>{setNum2(num2 + 1)}}>👍</span> {num2}</h3>
        <p>해운대</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>ㅇㅅaㅇ</p>
        <hr />
      </div>
      <Modal />
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
