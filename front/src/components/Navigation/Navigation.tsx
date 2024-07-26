import { NavLink } from "react-router-dom"

function Navigation() {
  return(
  <>
    <nav className="navigation">
      <NavLink to="/" className="navigation__link navigation__link_active">Все котики</NavLink>
      <NavLink to="/likes" className="navigation__link">Любимые котики</NavLink>
    </nav>
  </>
  )
}

export default Navigation