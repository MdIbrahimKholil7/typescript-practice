import React, { FC } from 'react';

interface OscarProps {
    children: React.ReactNode,
    name: string,
    age?: number
}
const Oscar: FC<OscarProps> = (props) => {
    const { age = 47 } = props
    return (
        <div>
            {props.children}
            <h1>My name is {props.name} and I am {age} years old</h1>
        </div>
    );
};

export default Oscar;