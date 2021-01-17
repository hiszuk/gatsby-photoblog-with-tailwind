import React, { Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

type SeoProps = {
  title?: string
  description?: string
  image?: string
} & React.ReactNode

const Layout: React.FC<SeoProps> = (props) => {
  return (
    <Fragment>
      <SEO
        title={props.title}
        description={props.description}
        image={props.image}
      />
      <div className="min-h-screen bg-neutral-300 relative">
        <Header />
        {props.children}
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
