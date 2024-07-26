import Header from "../Header/Header"
import CardList from "../CardList/CardList"
import Preloader from "../Preloader/Preloader"

function LikesCatCards() {

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

export default LikesCatCards