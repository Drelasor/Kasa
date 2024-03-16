import { Link } from 'react-router-dom';

const Card = ({ appart }) => {
  return (
    <Link to={`/appart/${appart.id}`} className="card">
      <img src={appart.cover} alt="Appartement" />
      <div className="title">{appart.title}</div>
    </Link>
  );
};

export default Card;
