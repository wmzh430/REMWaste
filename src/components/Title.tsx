import classNames from "classnames"
import { ITitle } from "@/config/interface"

const Title = ({ className, type, value }: ITitle) => {
  const txtClass = classNames(
    {
      "text-[28px] text-white": type === "heading",
      "text-lg text-gray-400": type === "subHeading",
    },
    className
  )

  return <h2 className={txtClass}>{value}</h2>
}

export default Title
