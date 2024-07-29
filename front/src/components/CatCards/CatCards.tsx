import CardList from "../CardList/CardList"
import Header from "../Header/Header"
import Preloader from "../Preloader/Preloader"

type CatCardsProps = {
  cardsArray: {
    id: string,
    url: string
  }[],

  isLoading: boolean,
  textPreloader: string,

  handleSaveCard: any,
  checkSavingCard: any
}

function CatCards({cardsArray, handleSaveCard, isLoading, textPreloader,checkSavingCard }: CatCardsProps) {


  return (
    <>
      <Header />
      <main className="content">
        <CardList
          cardsArray={cardsArray}
          handleSaveCard={handleSaveCard}
          checkSavingCard={checkSavingCard} />
        <Preloader
          isLoading={isLoading}
          textPreloader={textPreloader} />
      </main>

    </>
  )
}

export default CatCards