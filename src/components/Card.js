const Card = ({photoUrl, titre}) => {
    return(
        <div className="card">
            <figure>
                <img src={photoUrl} alt="Appartement"/>
                <figcaption>{titre}</figcaption>
            </figure>
        </div>
    )
}

export default Card
