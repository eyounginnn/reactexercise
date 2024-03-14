const Book = (props) => {
  const { img, title, author, number } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <p>{author}</p>
      <p>{title} </p>
      <span className='number'> {`# ${number + 1}`} </span>
    </article>
  )
};

export default Book;
