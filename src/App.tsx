import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Oscar from './components/Oscar';
import Button from './components/Button';
import User from './components/User';

function App() {

  const nameList = [
    {
      first: 'Bravo',
      last: 'sonic'
    },
    {
      first: 'Bravo',
      last: 'sonic'
    },
    {
      first: 'Bravo',
      last: 'sonic'
    },
    {
      first: 'Bravo',
      last: 'sonic'
    },
    {
      first: 'Bravo',
      last: 'sonic'
    },
  ]

  const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(e)
  }
  return (
    <div className="App">


      <Greet
        name='Ibrahim'
        message={10}
        nameList={nameList}
      />
      <Oscar
      name='Kholil'
      age={20}
      >
        <h1>Hello there i am </h1>

      </Oscar>
      <Button
      handleClick={handleClick}
      />

    <User
    style={{color:'red',padding:'10px'}}
    />



    </div>
  );
}

export default App;
