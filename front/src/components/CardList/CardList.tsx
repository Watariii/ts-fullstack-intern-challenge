import { useEffect, useState } from "react";
import Card from "../Card/Card"

function CardList() {

  const [cardsArray, setCardsArray] = useState([]);

  function getCards() {
    return fetch('https://api.thecatapi.com/v1/images/search?limit=20', {
      method: "GET",
      headers: {
        "x-api-key": "live_zLzU7BD9AzdYRomJ8uROCUC4vqGmbMGpIhOEhp6ILtHludAWUNpiPsdv1NI5Q0pA",
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }



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
    let array: any = []
    getCards().then((cardsData) => {
      cardsData.map((card: any, index: number) => {
        array.push({
          index: index,
          id: card.id,
          url: card.url
        })
      });
      if (cardsArray.length) {
        setCardsArray(cardsArray.concat(array))
        console.log(cardsArray, "заполнен")
      } else {
        setCardsArray(array)
        console.log(cardsArray, "0")
      }
    })
  };

  return (
    <section className="card-list">
      <ul className="card-list__items">
        {cardsArray.map((cardData: any) => (
          <Card
            key={cardData.id}
            url={cardData.url}
            card={cardData}
          />
        ))}
      </ul>
    </section>
  )
}

export default CardList