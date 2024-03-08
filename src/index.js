import React from 'react'
import ReactDOM from 'react-dom/client'

const Booklist = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <h2> image placeholder </h2>;
const Title = () => <h2> Book Title </h2>;
const Author = () => {
  return <h4> Author </h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
