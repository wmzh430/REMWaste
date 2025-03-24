const Price = ({ price }: { price: number }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="text-xl md:text-2xl font-bold text-primary">
          £{price}
        </span>
        <span className="text-sm text-gray-400 ml-2">per week</span>
      </div>
    </div>
  )
}

export default Price
