import { useEffect, useState } from "react";

type CardProps = {
  card: {
    id: string,
    url: string
  },

  handleSaveCard: any,
  checkSavingCard: any,
}

function Card({ card, handleSaveCard, checkSavingCard }: CardProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
      setIsSaved(checkSavingCard(card));
  }, [card, checkSavingCard])


  const cardButtonClassName = (`card__button-like ${isSaved
    ? "card__button-like_active"
    : ""
    }`)
  return (
    <li key={card.id}>
      <article className="card">
        <img className="card__image" src={card.url}></img>
        <button className={cardButtonClassName}
          onClick={() => handleSaveCard(card)}
        ></button>
      </article>
    </li >
  )
}

export default Card