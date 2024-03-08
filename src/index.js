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
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <img src= {img} alt={title}/>
      <h2> {title} </h2>
      <h4> {author.toUpperCase()} </h4>
    </article>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
