import Card from "../Card/Card"

type CardListProps = {
  cardsArray: {
    id: string,
    url: string
  }[],

  handleSaveCard: any,
  checkSavingCard: any,
}

function CardList({cardsArray, handleSaveCard, checkSavingCard }: CardListProps) {

  return (
    <section className="card-list">
      <ul className="card-list__items">
        {cardsArray.map((cardData) => (
          <Card
            key={cardData.id}
            card={cardData}
            handleSaveCard={handleSaveCard}
            checkSavingCard={checkSavingCard}
          />
        ))}
      </ul>
    </section>
  )
}

export default CardList