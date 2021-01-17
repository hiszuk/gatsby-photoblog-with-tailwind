import React, { ReactElement } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import SnsIcons from "./SnsIcons"

function Footer(): ReactElement {
  const { author, footerLinks } = useSiteMetadata()
  return (
    <div className="bg-neutral-700 w-full absolute bottom-0">
      <div className="container text-white text-sm py-4 flex flex-wrap item-center">
        <p className="opacity-50 inline-flex ml-2 lg:mt-3 item-center">
          &copy; {new Date().getFullYear()} {author}, All rights reserved.
        </p>
        {footerLinks && (
          <div className="block flex-row inline-flex ml-auto mr-2 w-auto item-center item-srart">
            {footerLinks.map((link: any) => (
              <SnsIcons name={link.name} url={link.url} key={link.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Footer
