
function Card({card}:any) {
  return (
    <li key={card.index}>
      <article className="card">
        <img className="card__image" src={card.url}></img>
        <button className="card__button-like"></button>
      </article>
    </li>
  )
}

export default Card