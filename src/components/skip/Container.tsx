import React from "react"
import classNames from "classnames"

const SkipCardContainer = ({
  isSelected,
  children,
  onClick,
}: {
  isSelected: boolean
  children: React.ReactNode

  onClick: () => void
}) => {
  return (
    <div
      className={classNames(
        "relative rounded-lg border-2 p-4 md:p-6 transition-all bg-default hover:border-primary-light border-secondary text-white cursor-pointer",
        isSelected ? "!border-primary" : ""
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default SkipCardContainer
