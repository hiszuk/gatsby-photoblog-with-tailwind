import { Link } from "gatsby"
import React, { ReactElement } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import ImageIcon from "../icons/ImageIcon"

function Brand(): ReactElement {
  const { title } = useSiteMetadata()
  return (
    <Link to="/">
      <div className="inline-flex items-center mr-6 text-white">
        <ImageIcon className="w-6 h-6 mr-2 fill-current" />
        <span className="text-xl font-extrabold tracking-tight">{title}</span>
      </div>
    </Link>
  )
}

export default Brand
