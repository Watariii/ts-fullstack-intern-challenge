import { Routes, Route } from "react-router-dom"

import CatCards from "../CatCards/CatCards";
import LikesCatCards from '../LikesCatCards/LikesCatCards';
import { useEffect, useState } from "react"
import { getSavedCards, saveCard, deleteCard } from "../../utils/CatLikesApi"
import { getCards } from "../../utils/CatsApi"
import Card from "../Card/Card";

type Card = {
  id: string,
  url: string
}
function App() {

  const [isLoading, setloading] = useState(false);
  const [textPreloader, setTextPreloader] = useState("");
  const [cardsArray, setCardsArray] = useState<Card[]>([]);

  useEffect(() => {
    requestCardList()
  }, []);

  useEffect(() => {

    window.addEventListener("scroll", handleRequestByScroll)

    return () => {
      window.removeEventListener("scroll", handleRequestByScroll)

    }

  }, [cardsArray.length,
  ])


  function handleRequestByScroll() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
      requestCardList()
    }
  }

  function requestCardList() {
    cardsArray.length ? setTextPreloader("ещё") : setTextPreloader("");
    setloading(true)
    let array: Card[] = []
    getCards().then((cardsData) => {
      cardsData.map((card: Card) => {
        array.push({
          id: card.id,
          url: card.url
        })
      });
      if (cardsArray.length) {
        setCardsArray(cardsArray.concat(array));
        setloading(false);
      } else {
        setCardsArray(array)
        setloading(false)
      }
    })
  };
  //saveCards____________________________________________________________

  const [saveCardsArray, setSaveCardsArray] = useState<Card[]>([]);

  useEffect(() => {
    getSavedCards()
      .then((cards) => {
        setSaveCardsArray(cards)
      })

  }, [])


  function checkSavingCard(card: Card) {
    return saveCardsArray.some((item: Card) => {
      return item.id === card.id;
    });
  }



  function handleSaveCard(card: Card) {
    let id;
    saveCardsArray.map((item: Card) => {
      if (item.id === card.id) return (id = item.id);
    });
    if (!id) {
      likeCard(card);
    } else {
      deleteSavedCard(id);
    }
  }

  function likeCard(newCard: Card) {
    saveCard(newCard)
      .then((newCard) => {
        setSaveCardsArray(saveCardsArray.concat(newCard).reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteSavedCard(idCard: string) {
    deleteCard(idCard)
      .then(() => {
        setSaveCardsArray(
          saveCardsArray.filter((item) => item.id !== idCard)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Routes>
      <Route
        path='/'
        element={<CatCards
          cardsArray={cardsArray}
          isLoading={isLoading}
          textPreloader={textPreloader}
          handleSaveCard={handleSaveCard}
          checkSavingCard={checkSavingCard}
        />} />
      <Route
        path='/likes'
        element={<LikesCatCards
          saveCardsArray={saveCardsArray}
          handleSaveCard={handleSaveCard}
          checkSavingCard={checkSavingCard}
          />} />
    </Routes>
  )
}

export default App
