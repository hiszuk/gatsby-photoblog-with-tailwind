import React, { ReactElement } from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

function MenuLink(): ReactElement {
  const { menuLinks } = useSiteMetadata()
  return (
    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:mr-2 lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
      {menuLinks.map((link: { slug: string; name: string }) => (
        <Link
          key={link.name}
          to={link.slug}
          className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-sm text-primary-200 items-center justify-center hover:bg-primary-900 hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default MenuLink
