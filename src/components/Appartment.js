const Appartment = ({ photoUrl, titre })=>
{
return (
    <div>
      <img src={photoUrl} alt="Appartement" style={{ width: '100%', height: '100% '}} />
      <h3>{titre}</h3>
    </div>
)
}

export default Appartment