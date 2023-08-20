import "~style.css"
import { useState } from "react"

import { LocationPicker } from "~features/location-picker";

function IndexPopup() {
  const [click, setClick] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const changeClick = () => {
    setClick(!click)
    console.log(click)
  }
  return (
      <div className="plasmo-w-[500px] plasmo-h-[500px] plasmo-flex plasmo-flex-col plasmo-justify-center plasmo-items-center plasmo-gap-[1rem] plasmo-bg-gray-200 plasmo-text-lg">
      {(click)? <LocationPicker setLoading={setLocationLoading}/> : ""}
      <button
        onClick={changeClick}
        className={`plasmo-bg-blue-500 plasmo-text-white plasmo-rounded-md plasmo-px-8 plasmo-py-2 plasmo-text-lg plasmo-cursor-pointer plasmo-shadow-md ${
          locationLoading ? "plasmo-opacity-80 plasmo-pointer-events-none" : ""
        }`}
        disabled={locationLoading}
      >
        {locationLoading ? "Loading..." : "Show my location"}
      </button>
    </div>
  )
}

export default IndexPopup
