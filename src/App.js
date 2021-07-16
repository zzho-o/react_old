/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [title,setTitle] = useState(['남자 코트 추천', '우동 맛집','부산 여행 코스']);
  const [num, setNum] = useState([0,0,0]);
  const [modal,setModal] =useState(false);

  function eter_UI(){
    var array = [];

    for (var i = 0; i < 3; i++){
      array.push(<div>안녕</div>);
    }

    return array
  }

  function _click_button(){
    modal ? setModal(false) : setModal(true)
  }

  function change_title(){
    var newArray = [...title]; // ...은 딥카피
    newArray[0] == '남자 코트 추천' ? newArray[0] = '여자 코트 추천' : newArray[0] = '남자 코트 추천';
    
    setTitle(newArray);
    //setTitle(['여자 코트 추천', '우동 맛집','부산 여행 코스']);
  }

  function _click_like(){
    var newArray = [...num];
    newArray[0] += 1

    setNum(newArray);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'purple'}}>개발 Blog</div>
      </div>
      <button onClick={change_title}>Swapping</button>
      {eter_UI()}
      {
        title.map(function(i){
          return (
          <div className="list">
            <h3>{i} <span onClick={_click_like}>👍🏻</span> {num[0]}  </h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>
          )
        })
      }
      <button onClick={_click_button}>Button!</button>
      {
        modal ? <Modal title={title} /> : null
      }      
      

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
        <h2>제목 { props.title[0] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
