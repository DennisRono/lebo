import React, { Fragment } from 'react'
import '../styles/css/landingOne.css'
import CentImage from '../images/jumb_kibet.png'

const LandingOne = () => {
  return (
    <Fragment>
        <div className="landingOne">
            <div className="landingOneWrapper">
                <div className="landingOneBackParent">
                    <div className="landingOneBackLeft"></div>
                    <div className="landingOneBackRight"></div>
                    <div className="landingOneCenterImage">
                        <img src={CentImage} alt="" />
                    </div>
                    <header className="headerOne"></header>
                    <div className="textOverlay"></div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default LandingOne