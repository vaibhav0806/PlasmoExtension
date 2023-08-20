
import { useState } from "react"
import "~style.css"

import { LocationPicker } from "~features/location-picker";

function IndexPopup() {
  const [click, setClick] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const changeClick = () => {
    setClick(!click)
    console.log(click)
  }
  return (
    <>
      <div style={{
      width: "500px",
      height: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      backgroundColor: "#F0F0F0"
    }}>
      {(click)? <LocationPicker setLoading={setLocationLoading}/> : ""}
      <button 
      onClick={changeClick}
      style={{
        backgroundColor: '#007BFF',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      disabled={locationLoading}
      >
        {locationLoading? "Loading..." :  "Show my location"}
      </button>
    </div>
    </>
  )
}

export default IndexPopup
