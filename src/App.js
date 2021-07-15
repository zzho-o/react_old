/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [title,setTitle] = useState(['남자 코트 추천', '우동 맛집']);
  const [sectitle, setSectitle] = useState('부산 여행 코스');
  const [trdtitle, setTrdtitle] = useState('ㅇㅅㅇ');
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);


  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'purple'}}>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{title[0]} <span onClick={()=>{setNum(num + 1)}}>👍🏻</span> {num}  </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{sectitle} <span onClick={() =>{setNum2(num2 + 1)}}>👍</span> {num2}</h3>
        <p>해운대</p>
        <hr />
      </div>
      <div className="list">
        <h3>{trdtitle}</h3>
        <p>ㅇㅅaㅇ</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
