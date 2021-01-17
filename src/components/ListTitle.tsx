import * as React from "react"

type ListTitleProps = {
  title?: string
  subtitle?: string
}

const ListTitle: React.FC<ListTitleProps> = (props) => {
  return (
    <div className="mb-3 py-3 px-2 lg:px-10 rounded-t-md bg-neutral-600 flex flex-wrap">
      <div className="flex text-lg lg:text-2xl font-extrabold text-neutral-100">
        {props.title ? props.title : null}
      </div>
      <div className="flex ml-2 lg:ml-5 mt-1 text-md lg:text-xl text-neutral-300">
        {props.subtitle ? props.subtitle : null}
      </div>
    </div>
  )
}

export default ListTitle
