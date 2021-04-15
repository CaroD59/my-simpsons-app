const DisplayQuote = ({ character, image, quote }) => {
  return (
    <div>
      <p>
        <strong>{character}</strong>
      </p>
      <img src={image} alt='' />
      <p>{quote}</p>
    </div>
  );
};

export default DisplayQuote;
