
import './App.css';
import React, { useState } from 'react';


function App() {
  const [button1, setButton1] = useState("white");
  const [button2, setButton2] = useState("white");
  const [button3, setButton3] = useState("white");
  const [button4, setButton4] = useState("white");
  const [button5, setButton5] = useState("white");
  const [button6, setButton6] = useState("white");
  const [button7, setButton7] = useState("white");
  const [button8, setButton8] = useState("white");
  const [button9, setButton9] = useState("white");

  const [player, setPlayer] = useState("X");

  const changeColor1 = () =>{
    if(button1 === "white"){
      if(player === "X"){
        setButton1("red");
        setPlayer("O");
      }
      else{
        setButton1("blue");
        setPlayer("X");
      }
    }
  }

  const changeColor2 = () =>{
    if(button2 === "white"){
      if(player === "X"){
        setButton2("red");
        setPlayer("O");
      }
      else{
        setButton2("blue");
        setPlayer("X");
      }
    }
  }

  const changeColor3 = () =>{
    if(button3 === "white"){
      if(player === "X"){
        setButton3("red");
        setPlayer("O");
      }
      else{
        setButton3("blue");
        setPlayer("X");
      }
    }
  }

  const changeColor4 = () =>{
    if(button4 === "white"){
      if(player === "X"){
        setButton4("red");
        setPlayer("O");
      }
      else{
        setButton4("blue");
        setPlayer("X");
      }
    }
  }

  const changeColor5 = () =>{
    if(button5 === "white"){
      if(player === "X"){
        setButton5("red");
        setPlayer("O");
      }
      else{
        setButton5("blue");
        setPlayer("X");
      }
    }
  }

  const changeColor6 = () =>{
    if(button6 === "white"){
      if(player === "X"){
        setButton6("red");
        setPlayer("O");
      }
      else{
        setButton6("blue");
        setPlayer("X");
      }
    }
  }

  const changeColor7 = () =>{
    if(button7 === "white"){
      if(player === "X"){
        setButton7("red");
        setPlayer("O");
      }
      else{
        setButton7("blue");
        setPlayer("X");
      }
    }
  }

  const changeColor8 = () =>{
    if(button8 === "white"){
      if(player === "X"){
        setButton8("red");
        setPlayer("O");
      }
      else{
        setButton8("blue");
        setPlayer("X");
      }
    }
  }

  const changeColor9 = () =>{
    if(button9 === "white"){
      if(player === "X"){
        setButton9("red");
        setPlayer("O");
      }
      else{
        setButton9("blue");
        setPlayer("X");
      }
    }
  }

  if(button1 === "red" && button2 === "red" && button3 === "red"){
    alert("Red wins!");
  }
  if(button4 === "red" && button5 === "red" && button6 === "red"){
    alert("Red wins!");
  }
  if(button7 === "red" && button8 === "red" && button9 === "red"){
    alert("Red wins!");
  }
  if(button1 === "red" && button4 === "red" && button7 === "red"){
    alert("Red wins!");
  }
  if(button2 === "red" && button5 === "red" && button8 === "red"){
    alert("Red wins!");
  }
  if(button3 === "red" && button6 === "red" && button9 === "red"){
    alert("Red wins!");
  }
  if(button1 === "red" && button5 === "red" && button9 === "red"){
    alert("Red wins!");
  }
  if(button3 === "red" && button5 === "red" && button7 === "red"){
    alert("Red wins!");
  }
  if(button1 === "blue" && button2 === "blue" && button3 === "blue"){
    alert("Blue wins!");
  }
  if(button4 === "blue" && button5 === "blue" && button6 === "blue"){
    alert("Blue wins!");
  }
  if(button7 === "blue" && button8 === "blue" && button9 === "blue"){
    alert("Blue wins!");
  }
  if(button1 === "blue" && button4 === "blue" && button7 === "blue"){
    alert("Blue wins!");
  }
  if(button2 === "blue" && button5 === "blue" && button8 === "blue"){
    alert("Blue wins!");
  }
  if(button3 === "blue" && button6 === "blue" && button9 === "blue"){
    alert("Blue wins!");
  }
  if(button1 === "blue" && button5 === "blue" && button9 === "blue"){
    alert("Blue wins!");
  }
  if(button3 === "blue" && button5 === "blue" && button7 === "blue"){
    alert("Blue wins!");
  }

  


  return (
    <div className="App">
      <button onClick={(e)=> changeColor1()}>
                  {button1}
             </button>
      <button onClick={(e)=> changeColor2()}>
                  {button2}
             </button>
      <button onClick={(e)=> changeColor3()}>
                  {button3}
             </button> <br/>
      <button onClick={(e)=> changeColor4()}>
                  {button4}
             </button>
      <button onClick={(e)=> changeColor5()}>
                  {button5}
             </button>
      <button onClick={(e)=> changeColor6()}>
                  {button6}
             </button> <br/>
      <button onClick={(e)=> changeColor7()}>
                  {button7}
             </button>
      <button onClick={(e)=> changeColor8()}>
                  {button8}
             </button>
      <button onClick={(e)=> changeColor9()}>
                  {button9}
             </button> <br/>
    </div>
  );
}

export default App;
