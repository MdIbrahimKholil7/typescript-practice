import React, { FC } from 'react';
type GreetProps={
    name:string,
    message:number,
   nameList:{
       first:string,
       last:string
   } []
}
const Greet:FC<GreetProps> = ({name,message,nameList}) => {
    return (
        <div>
            <h1>Hey Mr {name} You have {message} unread message</h1>
            <div>
                {
                    nameList.map(name=><h3>{name.first} {name.last}</h3>)
                }
            </div>
        </div>
    );
};

export default Greet;