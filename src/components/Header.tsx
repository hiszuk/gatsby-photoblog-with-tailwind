import React, { ReactElement, useState } from "react"
import Brand from "./Brand"
import Burger from "./Burger"
import MenuLink from "./MenuLink"

function Header(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const handleClick = () => {
    setMenuOpen((isMenuOpen: boolean) => !isMenuOpen)
  }
  return (
    <div className="fixed w-full top-0 z-10">
      <nav className="flex items-center p-3 flex-wrap bg-primary-800">
        <Brand />
        <Burger menuopen={isMenuOpen ? 1 : undefined} onClick={handleClick} />
        <div
          className={`w-full ${
            isMenuOpen ? "block" : "hidden"
          } lg:block lg:flex-grow lg:inline-flex lg:w-auto`}
        >
          <MenuLink />
        </div>
      </nav>
    </div>
  )
}

export default Header
