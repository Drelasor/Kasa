const Appartment = ({ photoUrl, titre })=>
{
return (
    <div className="img">
      <figure>
        <img src={photoUrl} alt="Appartement"/>
        <figcaption>{titre}</figcaption>
      </figure>
    </div>
)
}

export default Appartment