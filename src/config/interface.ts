export interface ITitle {
  className?: string
  type: string
  value: string
}

export interface ISkipButton {
  isSelected: boolean
}

export interface ISkipCard {
  skipData: ISkipData
  selectedSkipId: number
  setSelectedSkipId: React.Dispatch<React.SetStateAction<number>>
}
export interface IButton {
  className?: string
  type: string
  value?: string
  isIcon: boolean
}

export interface ISkipData {
  allowed_on_road: boolean
  allows_heavy_waste: boolean
  area: string | null
  created_at: string
  forbidden: boolean
  hire_period_days:number
  id: number
  per_tonne_cost: number | null
  postcode: string
  price_before_vat: number
  size: number
  transport_cost: number | null
  updated_at: string
  vat: number
}

export interface IFootBar {
  size: number
  date: number
}
