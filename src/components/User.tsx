import React, { useState } from 'react';
import { UserStyle } from '../models/UserStyle';
const User = ({style}:UserStyle) => {

    const [logIn, setLogIn] = useState(false)

    const handleLogIn=()=>{
        setLogIn(true)
    }
    
    const handleLogOut=()=>{
        setLogIn(false)
    }
    
    return (
        <div>
            <div style={style}>
                <h1>Hi i am learning typescript.I am a beginner. And i decided i will learn typescript in one day.</h1>
            </div>

        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>LogOut</button>

            <h4>User is {logIn ? 'is log in':'log out'}</h4>
        </div>




        </div>
    );
};

export default User;