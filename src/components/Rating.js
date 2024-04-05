import starfull from "../asset/svg/starfull.svg"
import starblank from "../asset/svg/starblank.svg"


export default function Rating ({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img src={starfull}></img>); 
    } else {
      stars.push(<img src={starblank}></img>); 
    }
  }

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
}
