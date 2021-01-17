import { Link } from "gatsby"
import React, { Fragment } from "react"
import Image from "gatsby-image"

type PreviewProps = {
  basePath?: string
  previous: any
  next: any
}

const Preview: React.FC<PreviewProps> = (props) => {
  const hasPreviewContent = props.next || props.previous
  const path = props.basePath || ""

  return (
    <Fragment>
      {hasPreviewContent && (
        <div className="mt-3 md:mt-6 grid grid-cols-2 gap-1">
          <div className="justify-self-end  w-full md:w-8/12 lg:w-6/12 bg-neutral-400 rounded-bl-lg md:rounded-l-lg overflow-hidden">
            {props.previous && (
              <Link to={`${path}/${props.previous.fields.slug}`}>
                <div className="w-full h-full opacity-20 hover:opacity-70">
                  <Image
                    fluid={
                      props.previous.frontmatter.cover.childImageSharp.fluid
                    }
                  />
                </div>
                <div className="-mt-8 w-full text-center text-white font-bold">
                  {props.previous.frontmatter.title || `No Title`}
                </div>
              </Link>
            )}
          </div>
          <div className="justify-self-start w-full md:w-8/12 lg:w-6/12 bg-neutral-400 rounded-br-lg md:rounded-r-lg overflow-hidden">
            {props.next && (
              <Link to={`${path}/${props.next.fields.slug}`}>
                <div className="w-full h-full opacity-20 hover:opacity-70">
                  <Image
                    fluid={props.next.frontmatter.cover.childImageSharp.fluid}
                  />
                </div>
                <div className="-mt-8 w-full text-center text-white font-bold">
                  {props.next.frontmatter.title || `No Title`}
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Preview
