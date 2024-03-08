import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

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
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81RYRl7DvXL._AC_UL600_SR600,400_.jpg"
    alt="Bad Therapy: Why the Kids Arent Growing Up"
  />
)
const Title = () => <h2> Bad Therapy: Why the Kids Aren't Growing Up </h2>
const Author = () => {
  return <h4> Abigail Shrier </h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
