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

const author='Kristin Hannah';
const title='The Women';
const img='./images/1.jpg';

const Book=()=>{
    return (
        <article className='book'>
            <img src={img} alt='title'/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            
        </article>
    );
};
/*
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
    const inlineHeadingStyles={
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
    };

    return <h4 style={inlineHeadingStyles}>Kristin Hannah</h4>;
};
*/


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
