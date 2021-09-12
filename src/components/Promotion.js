import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  const openInNewTab = url => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }
  
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p>
            {data.promotionPara}
            <button
              className="btnPaisanos"
              href="https://paisanos.io"
              onClick={() => openInNewTab("https://paisanos.io")}
            >
              Paisanos
            </button>
            {".\n"} {data.promotionPara2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
