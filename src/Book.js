const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <p>{author}</p>
      <p>{title} </p>
    </article>
  )
};

export default Book;
