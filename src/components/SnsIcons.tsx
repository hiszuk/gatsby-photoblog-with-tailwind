import React, { ReactElement } from "react"
import FacebookIcon from "../icons/FacebookIcon"
import GithubIcon from "../icons/GithubIcon"
import GoogleIcon from "../icons/GoogleIcon"
import InstagramIcon from "../icons/InstagramIcon"
import LinkIcon from "../icons/LinkIcon"
import TwitterIcon from "../icons/TwitterIcon"

type SnsProps = {
  name: string
  url?: string
}

function SnsIcons(props: SnsProps): ReactElement {
  return (
    <>
      {props.name === "twitter" && props.url ? (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-lg hover:border-transparent hover:text-neutral-800 hover:bg-neutral-400"
        >
          <TwitterIcon className="w-5 m-2 fill-current" />
        </a>
      ) : (
        <></>
      )}

      {props.name === "facebook" && props.url ? (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-lg hover:border-transparent hover:text-neutral-800 hover:bg-neutral-400"
        >
          <FacebookIcon className="w-5 m-2 fill-current" />
        </a>
      ) : (
        <></>
      )}

      {props.name === "instagram" && props.url ? (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-lg hover:border-transparent hover:text-neutral-800 hover:bg-neutral-400"
        >
          <InstagramIcon className="w-5 m-2 fill-current" />
        </a>
      ) : (
        <></>
      )}

      {props.name === "github" && props.url ? (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-lg hover:border-transparent hover:text-neutral-800 hover:bg-neutral-400"
        >
          <GithubIcon className="w-5 m-2 fill-current" />
        </a>
      ) : (
        <></>
      )}

      {props.name === "google" && props.url ? (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-lg hover:border-transparent hover:text-neutral-800 hover:bg-neutral-400"
        >
          <GoogleIcon className="w-5 m-2 fill-current" />
        </a>
      ) : (
        <></>
      )}

      {props.name === "link" && props.url ? (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-lg hover:border-transparent hover:text-neutral-800 hover:bg-neutral-400"
        >
          <LinkIcon className="w-5 m-2 fill-current" />
        </a>
      ) : (
        <></>
      )}
    </>
  )
}

export default SnsIcons
