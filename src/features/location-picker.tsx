import "~style.css"

import axios from "axios"
import useSWR from "swr"

import { useEffect } from "react"

const countryList = require("country-list")

interface IPResponse {
  ip: string
}

interface Location {
  country: string
  city: string
}

const fetcher = async (url: string) => {
  try {
    const ipResponse = await axios.get(url)
    const ipData: IPResponse = ipResponse.data

    const locationResponse = await axios.get(
      `https://ipinfo.io/${ipData.ip}?token=${process.env.PLASMO_PUBLIC_LOCATION}`
    )
    const locationData: Location = locationResponse.data

    return locationData
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export const LocationPicker = ({ setLoading }) => {
  const {
    data: locationData,
    error: ipError,
    isValidating: ipIsLoading
  } = useSWR<Location>("https://api.ipify.org?format=json", fetcher)

  useEffect(() => {
    setLoading(ipIsLoading)
  }, [ipIsLoading, setLoading])

  if (ipIsLoading) return <></>
  if (ipError) return <div>IP data loading error</div>
  return (
    <div className="plasmo-text-gray-700">
      Your country is {countryList.getName(locationData.country)} and city is{" "}
      {locationData.city}
    </div>
  )
}
