import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Abigail S.',
    title: 'Bad Therapy: Why the Kids Arent Growing Up',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81RYRl7DvXL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Kristin Hannah',
    title: 'The Women: a Novel',
    img: 'https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
]
// const newBooks = books.map(books) => {
// return <h1>{books}</h1>;
// };
// console.log(newBooks);

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        const { img, title, author, id } = book
        return <Book img={img} title={title} author={author} key={id}></Book>
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2> This is the form </h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit"> submit </button>
        <button onClick={handleButtonClick} type="button">
          {' '}
          click me!{' '}
        </button>
      </form>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <p>{author}</p>
      <p>{title} </p>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
