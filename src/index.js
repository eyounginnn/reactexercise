import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books';
import Book from './Book';

// const newBooks = books.map(books) => {
// return <h1>{books}</h1>;
// };
// console.log(newBooks);

const Booklist = () => {
  return (
    <>
    {/* ^ this is a shortcut to adding a parent <> </> */}
        <h1> Amazon Best Sellers </h1>
      <section className='booklist'>
      <EventExamples />
      {books.map((book,index) => {
        // const { img, title, author, id, index } = book;
        return <Book {...book} key={book.id} number = {index}></Book>
    })}
    </section>
    </>
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


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
