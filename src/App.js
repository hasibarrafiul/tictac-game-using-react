import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './App.css';
import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [open, setOpen] = React.useState(false);


  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [button3, setButton3] = useState("");
  const [button4, setButton4] = useState("");
  const [button5, setButton5] = useState("");
  const [button6, setButton6] = useState("");
  const [button7, setButton7] = useState("");
  const [button8, setButton8] = useState("");
  const [button9, setButton9] = useState("");

  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setButton1("");
    setButton2("");
    setButton3("");
    setButton4("");
    setButton5("");
    setButton6("");
    setButton7("");
    setButton8("");
    setButton9("");
    setPlayer("X");
    setWinner("");

  };


  const changeColor1 = () =>{
    if(button1 === ""){
      if(player === "X"){
        setButton1("X");
        setPlayer("O");
      }
      else{
        setButton1("O");
        setPlayer("X");
      }
    }
  }

  const changeColor2 = () =>{
    if(button2 === ""){
      if(player === "X"){
        setButton2("X");
        setPlayer("O");
      }
      else{
        setButton2("O");
        setPlayer("X");
      }
    }
  }

  const changeColor3 = () =>{
    if(button3 === ""){
      if(player === "X"){
        setButton3("X");
        setPlayer("O");
      }
      else{
        setButton3("O");
        setPlayer("X");
      }
    }
  }

  const changeColor4 = () =>{
    if(button4 === ""){
      if(player === "X"){
        setButton4("X");
        setPlayer("O");
      }
      else{
        setButton4("O");
        setPlayer("X");
      }
    }
  }

  const changeColor5 = () =>{
    if(button5 === ""){
      if(player === "X"){
        setButton5("X");
        setPlayer("O");
      }
      else{
        setButton5("O");
        setPlayer("X");
      }
    }
  }

  const changeColor6 = () =>{
    if(button6 === ""){
      if(player === "X"){
        setButton6("X");
        setPlayer("O");
      }
      else{
        setButton6("O");
        setPlayer("X");
      }
    }
  }

  const changeColor7 = () =>{
    if(button7 === ""){
      if(player === "X"){
        setButton7("X");
        setPlayer("O");
      }
      else{
        setButton7("O");
        setPlayer("X");
      }
    }
  }

  const changeColor8 = () =>{
    if(button8 === ""){
      if(player === "X"){
        setButton8("X");
        setPlayer("O");
      }
      else{
        setButton8("O");
        setPlayer("X");
      }
    }
  }

  const changeColor9 = () =>{
    if(button9 === ""){
      if(player === "X"){
        setButton9("X");
        setPlayer("O");
      }
      else{
        setButton9("O");
        setPlayer("X");
      }
    }
  }

  if(button1 === "X" && button2 === "X" && button3 === "X"){
    if(open === false){
      setWinner("X");
      handleClickOpen();
    }
  }

  if(button4 === "X" && button5 === "X" && button6 === "X"){
    if(open === false){
      setWinner("X");
      handleClickOpen();
    }
  }
  if(button7 === "X" && button8 === "X" && button9 === "X"){
    if(open === false){
      setWinner("X");
      handleClickOpen();
    }
  }
  if(button1 === "X" && button4 === "X" && button7 === "X"){
    if(open === false){
      setWinner("X");
      handleClickOpen();
    }
  }
  if(button2 === "X" && button5 === "X" && button8 === "X"){
    if(open === false){
      setWinner("X");
      handleClickOpen();
    }
  }
  if(button3 === "X" && button6 === "X" && button9 === "X"){
    if(open === false){
      setWinner("X");
      handleClickOpen();
    }
  }
  if(button1 === "X" && button5 === "X" && button9 === "X"){
    if(open === false){
      setWinner("X");
      handleClickOpen();
    }
  }
  if(button3 === "X" && button5 === "X" && button7 === "X"){
    if(open === false){
      setWinner("X");
      handleClickOpen();
    }
  }
  if(button1 === "O" && button2 === "O" && button3 === "O"){
    if(open === false){
      setWinner("O");
      handleClickOpen();
    }
  }
  if(button4 === "O" && button5 === "O" && button6 === "O"){
    if(open === false){
      setWinner("O");
      handleClickOpen();
    }
  }
  if(button7 === "O" && button8 === "O" && button9 === "O"){
    if(open === false){
      setWinner("O");
      handleClickOpen();
    }
  }
  if(button1 === "O" && button4 === "O" && button7 === "O"){
    if(open === false){
      setWinner("O");
      handleClickOpen();
    }
  }
  if(button2 === "O" && button5 === "O" && button8 === "O"){
    if(open === false){
      setWinner("O");
      handleClickOpen();
    }
  }
  if(button3 === "O" && button6 === "O" && button9 === "O"){
    if(open === false){
      setWinner("O");
      handleClickOpen();
    }
  }
  if(button1 === "O" && button5 === "O" && button9 === "O"){
    if(open === false){
      setWinner("O");
      handleClickOpen();
    }
  }
  if(button3 === "O" && button5 === "O" && button7 === "O"){
    if(open === false){
      setWinner("O");
      handleClickOpen();
    }
  }
  
  if(button1 !== "" && button2 !== "" && button3 !== "" && button4 !== "" && button5 !== "" && button6 !== "" && button7 !== "" && button8 !== "" && button9 !== ""){
    if(open === false){
      setWinner("Draw");
      handleClickOpen();
    }
  }


  return (
    <Box 
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > :not(style)': {
        m: 1,
        width: 150,
        height: 150,
        
      },
    }}>
       <Paper elevation={3}>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor1()}>
                  {button1}
             </Button>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor2()}>
                  {button2}
             </Button>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor3()}>
                  {button3}
             </Button> <br/>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor4()}>
                  {button4}
             </Button>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor5()}>
                  {button5}
             </Button>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor6()}>
                  {button6}
             </Button> <br/>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor7()}>
                  {button7}
             </Button>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor8()}>
                  {button8}
             </Button>
      <Button style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}} variant="contained" onClick={(e)=> changeColor9()}>
                  {button9}
             </Button> 
            <div align='center'>
            <p>Player {player}'s turn</p>
            </div>
             
             </Paper>
             <br/>
             <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><p>{"Game Over"}</p></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <p>{winner === "Draw" ? "Draw" : winner === "X" ? "The Winner is X" : "The Winner is O"}</p> <br></br>
          <Button onClick={handleClose}>New Game</Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
             
    </Box>
  );
}

export default App;
