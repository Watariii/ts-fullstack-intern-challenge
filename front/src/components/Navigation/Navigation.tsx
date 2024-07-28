import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <NavLink to="/" className={({ isActive }) =>
          `navigation__link ${isActive ? "active" : ""}`}>Все котики</NavLink>
        <NavLink to="/likes" className={({ isActive }) =>
          `navigation__link ${isActive ? "active" : ""}`}>Любимые котики</NavLink>
      </nav>
    </>
  )
}

export default Navigation