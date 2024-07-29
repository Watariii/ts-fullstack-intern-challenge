import Header from "../Header/Header"
import CardList from "../CardList/CardList"

type LikesCatCardsProps = {
  saveCardsArray: {
    id: string,
    url: string
  }[],

  handleSaveCard: any,
  checkSavingCard: any,
}


function LikesCatCards({saveCardsArray, handleSaveCard, checkSavingCard }: LikesCatCardsProps) {

  return (
    <>
      <Header />
      <main className="content">
        <CardList
          cardsArray={saveCardsArray}
          handleSaveCard={handleSaveCard}
          checkSavingCard={checkSavingCard}
          />
      </main>
    </>
  )
}

export default LikesCatCards