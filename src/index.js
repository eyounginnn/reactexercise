import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

const firstBook = {
    author : 'Abigail S.',
    title : 'Bad Therapy: Why the Kids Arent Growing Up',
    img :
    'https://images-na.ssl-images-amazon.com/images/I/81RYRl7DvXL._AC_UL600_SR600,400_.jpg',
}

const secondBook = {
  author: 'Kristin Hannah',
  title: 'The Women: a Novel',
  img: 'https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg',
}

const Booklist = () => {
    return (
    <section className='booklist'>
      <Book author={firstBook.author} title = {firstBook.title} img = {firstBook.img}/>
      <Book title= {secondBook.title} author={secondBook.author} img = {secondBook.img}/>
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
