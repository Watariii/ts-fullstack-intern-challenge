import { useState } from "react"
import CardList from "../CardList/CardList"
import Header from "../Header/Header"
import Preloader from "../Preloader/Preloader"


function CatCards() {
const [isLoading, setloading] = useState(false);

  return (
    <>
      <Header />
      <main className="content">
        <CardList />
        <Preloader />
      </main>

    </>
  )
}

export default CatCards