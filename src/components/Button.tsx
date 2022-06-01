import React, { FC } from 'react';

interface ButtonProps{
    handleClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
}
interface InputProps{
    [x: string]: any;
    handleInput:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value:string
}
const Button:FC<ButtonProps> = ({handleClick}) => {
    
    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <button onClick={(e)=>handleClick(e)}>Click</button>
            <div>
                <input type="text" name='name' onChange={handleInput}/>
            </div>
        </div>

    );
};

export default Button;