import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

//first component
/*
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
*/

const BookList= ()=>{
    return (
        <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
        </section>
    );
};

const Book=()=>{
    return (
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
};

const Image=()=>{
    return(
        <img src='./images/1.jpg' 
        alt='The Women: A Novel' />
    );
};

const Title=()=>{
    return(
        <h2>The Women</h2>
    );
};

const Author=()=>{
    return <h4>Kristin Hannah</h4>;
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
