import React, { ReactElement } from "react"
import BarsIcon from "../icons/BarsIcon"
import TimesIcon from "../icons/TimesIcon"

type BurgerProps = {
  menuopen: number | undefined
} & JSX.IntrinsicElements["button"]

function Burger(props: BurgerProps): ReactElement {
  return (
    <div className="block inline-flex ml-auto lg:hidden">
      <button
        {...props}
        className="px-2 py-1 text-primary-200 border border-primary-400 rounded hover:text-white hover:border-white"
      >
        {props.menuopen ? (
          <TimesIcon className="w-4 h-4 fill-current" />
        ) : (
          <BarsIcon className="w-4 h-4 fill-current" />
        )}
      </button>
    </div>
  )
}

export default Burger
