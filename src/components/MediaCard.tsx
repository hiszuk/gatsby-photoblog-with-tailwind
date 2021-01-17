import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { Fragment } from "react"
import CloudIcon from "../icons/CloudIcon"
import DateIcon from "../icons/DateIcon"
import HtmlContent from "./HtmlContent"

type MediaCardProps = {
  title?: string
  date?: string
  fluid?: FluidObject | FluidObject[]
  tags?: Array<string>
  slug?: string
  detail?: string
  src?: string
}

const MediaCard: React.FC<MediaCardProps> = (props) => {
  const url = props.slug || "/"
  return (
    <div className="overflow-hidden rounded shadow-lg bg-white">
      {props.fluid ? (
        <Link to={url}>
          <Image fluid={props.fluid} />
        </Link>
      ) : (
        <Fragment></Fragment>
      )}
      {props.date ? (
        <div className="px-3 py-2 grid grid-rows-1 grid-flow-col justify-items-stretch">
          <div className="justify-self-start text-base font-bold">
            <Link to={url} className="hover:text-neutral-500">
              {props.title ? props.title : `No Title`}
            </Link>
          </div>
          <div className="justify-self-end flex flex-row text-neutral-500">
            <DateIcon className="w-4 h-4 mx-1 fill-current" />
            <p className="text-sm">{props.date}</p>
          </div>
        </div>
      ) : null}
      <div className="px-3 mt-2 pb-2 h-16 flex flex-row">
        <div>
          {props.tags?.map((tag) => (
            <Link to={`/tags/${tag}`} key={tag}>
              <span
                className="
                inline-block 
                px-3 py-1 mr-1
                text-xs font-semibold text-neutral-700 bg-neutral-200 
                rounded-full
                hover:border-transparent hover:text-neutral-800 hover:bg-neutral-400"
              >
                {tag}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex ml-auto">
          {props.detail && (
            <HtmlContent title={props.title} html={props.detail} />
          )}
          {props.src && (
            <a href={props.src} download>
              <button
                className="
                ml-2
                text-neutral-700 bg-neutral-200
                rounded-full border-transparent bg-tranparent
                hover:text-neutral-800 hover:bg-neutral-400"
              >
                <CloudIcon className="w-5 h-5 m-2 fill-current" />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default MediaCard
