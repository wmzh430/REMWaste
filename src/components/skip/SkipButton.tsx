import { ISkipButton } from "@/config/interface"

const SkipButton: React.FC<ISkipButton> = ({ isSelected }) => {
  return (
    <button
      className={`${isSelected ? "!bg-primary hover:!bg-primary-hover" : ""} w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
    bg-secondary text-white hover:bg-secondary-hover cursor-pointer`}
    >
      {isSelected ? (
        <span>Selected</span>
      ) : (
        <>
          <span>Select This Skip</span>
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
        </>
      )}
    </button>
  )
}

export default SkipButton
