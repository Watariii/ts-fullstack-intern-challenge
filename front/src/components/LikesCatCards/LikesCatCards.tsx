import Header from "../Header/Header"
import CardList from "../CardList/CardList"
import { useLocation } from "react-router-dom";

type LikesCatCardsProps = {
  saveCardsArray: {
    id: string,
    url: string
  }[],

  handleSaveCard: any,
  checkSavingCard: any,
}


function LikesCatCards({saveCardsArray, handleSaveCard, checkSavingCard }: LikesCatCardsProps) {
  const location = useLocation();

  // useEffect(() => {
  //   setRenderSavedCardsArray(saveCardsArray);
  // }, [location])

  return (
    <>
      <Header />
      <main className="content">
        <CardList
          cardsArray={saveCardsArray}
          type="likes"
          handleSaveCard={handleSaveCard}
          checkSavingCard={checkSavingCard}
          />
      </main>
    </>
  )
}

export default LikesCatCards