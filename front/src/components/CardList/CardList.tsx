import Card from "../Card/Card"

type CardListProps = {
  cardsArray: {
    id: string,
    url: string
  }[],

  type: "all" | "likes",

  handleSaveCard: any,
  checkSavingCard: any,
}

function CardList({cardsArray, type, handleSaveCard, checkSavingCard }: CardListProps) {

  return (
    <section className="card-list">
      <ul className="card-list__items">
        {cardsArray.map((cardData) => (
          <Card
            key={cardData.id}
            card={cardData}
            handleSaveCard={handleSaveCard}
            checkSavingCard={checkSavingCard}
            type={type}
          />
        ))}
      </ul>
    </section>
  )
}

export default CardList