export default function Banner({ bannerImg, bannerTxt }) {
  return (
    <div className="banner">
      <img src={bannerImg}></img>
      <h1>{bannerTxt}</h1>
    </div>
  );
}
