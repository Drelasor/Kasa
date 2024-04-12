import starfull from "../asset/svg/starfull.svg"
import starblank from "../asset/svg/starblank.svg"


export default function Rating ({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img key={i} src={starfull} alt={`Star ${i + 1}`} />);
    } else {
      stars.push(<img key={i} src={starblank} alt={`Blank Star ${i + 1}`} />);
    }
  }

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
}
