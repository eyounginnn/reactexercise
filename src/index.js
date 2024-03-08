import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

const author='Abigail S.';
const title = 'Bad Therapy: Why the Kids Arent Growing Up';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/81RYRl7DvXL._AC_UL600_SR600,400_.jpg';



const Booklist = () => {
    return (
    <section className='booklist'>
      <Book author={author} title = {title} img = {img}/>
      <Book title= {title} author={author} img = {img}/>
    </section>
  )
}

const Book = (props) => {
    console.log(props);
  return (
    <article className="book">
      <img src= {props.img} alt={props.title}/>
      <p>{props.author}</p>
      <p>{props.title} </p>
    </article>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
