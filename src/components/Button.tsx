import classNames from "classnames"
import { IButton } from "@/config/interface"

const Button: React.FC<IButton> = ({ value, type, className, isIcon }) => {
  const txtClass = classNames(
    {
      "bg-primary hover:bg-primary-hover": type === "primary",
      "bg-secondary hover:bg-secondary-hover": type === "secondary",
    },
    "w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center text-white space-x-2 cursor-pointer",
    className
  )

  return (
    <button className={txtClass}>
      <span>{value}</span>
      {isIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right w-4 h-4"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      )}
    </button>
  )
}

export default Button
