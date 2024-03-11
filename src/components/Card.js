const Card = ({ imgUrl, title }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt="Appartement" />
      <div className="title">{title}</div>
    </div>
  );
};

export default Card;
