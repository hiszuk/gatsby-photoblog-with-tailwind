import { Link } from "gatsby"
import React from "react"
import ArrowLeftIcon from "../icons/ArrowLeftIcon"
import ArrowRightIcon from "../icons/ArrowRightIcon"

const Pagination: React.FC<any> = ({ props }) => {
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div className="mt-10 grid grid-cols-2 gap-10">
      <div className="justify-self-end">
        {previousPagePath ? (
          <Link to={previousPagePath}>
            <div className="px-3 py-1 text-primary-800 rounded-lg hover:border-transparent hover:text-white hover:bg-neutral-500">
              <ArrowLeftIcon className="w-8 h-8 mx-1 fill-current" />
            </div>
          </Link>
        ) : null}
      </div>
      <div className="justify-self-start">
        {nextPagePath ? (
          <Link to={nextPagePath}>
            <div className="px-3 py-1 text-primary-800 rounded-lg hover:border-transparent hover:text-white hover:bg-neutral-500">
              <ArrowRightIcon className="w-8 h-8 mx-1 fill-current" />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default Pagination
