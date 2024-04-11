import React from 'react';
import ReactDOM from 'react-dom/client';

//first component

function Greeting(){
    return (
        <div>
            <Message />
            <Person />
        </div>

    ); 
}

const Message = () => <h3> Message</h3>;
const Person =() => {
    return <p> This is John Doe</p>;
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>);
