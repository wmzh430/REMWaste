import SkipCardContainer from "./skip/Container"
import SkipImage from "./skip/SkipImage"
import Price from "./skip/Price"
import SkipButton from "./skip/SkipButton"
import { ISkipCard } from "@/config/interface"

const SkipCard: React.FC<ISkipCard> = ({
  skipData,
  selectedSkipId,
  setSelectedSkipId,
}) => {
  const isSelected = skipData.id === selectedSkipId

  const onClick = () => {
    setSelectedSkipId(skipData.id)
  }
  return (
    <SkipCardContainer isSelected={isSelected} onClick={onClick}>
      <SkipImage
        size={skipData.size}
        allowsHeavyWaste={skipData.allows_heavy_waste}
      />
      <h3 className="!text-lg md:text-xl font-bold mb-2 text-white">
        {skipData.size} Yard Skip
      </h3>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">
        {skipData.hire_period_days} day hire period
      </p>
      <Price price={skipData.price_before_vat} />
      <SkipButton isSelected={isSelected} />
    </SkipCardContainer>
  )
}

export default SkipCard
