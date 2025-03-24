"use client"

import { useEffect, useState } from "react"
import Title from "./Title"
import SkipCard from "./SkipCard"
import FooterBar from "./FooterBar"
import { ISkipData } from "@/config/interface"

const Dashboard = () => {
  const [skipDatas, setSkipDatas] = useState<ISkipData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedSkipId, setSelectedSkipId] = useState<number>(0)
  const [selectedData, setSelectedData] = useState<ISkipData | null>(null)

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((json) => {
        setSkipDatas(json)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching skips:", err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const found = skipDatas.find((data) => data.id === selectedSkipId)
    if (found) {
      setSelectedData(found)
    }
  }, [selectedSkipId, skipDatas])

  return (
    <main>
      <div className="mt-16 flex flex-col justify-center items-center gap-4 text-white font-satoshi-bold">
        <Title type="heading" value="Choose Your Skip Size" />
        <Title
          type="subHeading"
          value="Select the skip size that best suits your needs"
        />
      </div>
      {loading ? (
        <p className="text-lg text-white">Loading...</p>
      ) : !skipDatas ? (
        <p className="text-lg text-white">No data available.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skipDatas.map((data: ISkipData) => (
            <SkipCard
              key={data.id}
              skipData={data}
              selectedSkipId={selectedSkipId}
              setSelectedSkipId={setSelectedSkipId}
            />
          ))}
        </div>
      )}
      {selectedData !== null && (
        <FooterBar
          size={selectedData.size}
          date={selectedData.hire_period_days}
        />
      )}
    </main>
  )
}

export default Dashboard
