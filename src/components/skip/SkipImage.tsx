import Image from "next/image"

const SkipImage = ({
  size,
  allowsHeavyWaste,
}: {
  size: number
  allowsHeavyWaste: boolean
}) => {
  return (
    <div className="relative">
      <Image
        src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
        alt="10 Yard Skip"
        width={800}
        height={300}
        className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
      />
      <div className="absolute top-3 right-2 z-20 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
        {size}&nbsp;Yards
      </div>
      {allowsHeavyWaste && (
        <div className="absolute bottom-3 left-2 z-20 space-y-2">
          <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
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
              className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            {}
            <span className="text-xs font-medium text-yellow-500">
              Private Property Only
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default SkipImage
