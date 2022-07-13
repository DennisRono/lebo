import React, { Fragment } from 'react'
import '../styles/css/landingOne.css'
import CentImage from '../images/jumb_kibet.png'
import { Link } from 'react-router-dom'

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
                    <header className="headerOne">
                        <nav className="navigation">
                            <ul>
                                <li className="linkDarkText">
                                    <Link className="OneLinks" to="/" >Home</Link>
                                </li>
                                <li className="linkDarkText">
                                    <Link className="OneLinks" to="" >Shop</Link>
                                </li>
                                <li className="linkDarkText logoLink">
                                    <Link className="OneLinks logo" to="/" >Le<span>Bo</span></Link>
                                </li>
                                <li className="linkWhiteText">
                                    <Link className="OneLinks" to="" >Categories</Link>
                                </li>
                                <li className="linkWhiteText">
                                    <Link className="OneLinks" to="" >About</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="textOverlay">
                        <div className="overlayWapper">
                            <div className="txtCachy">
                                <h1 className="ChachyText">desi<span>gner</span></h1>
                            </div>
                            <div className="leftBottomAc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque, veritatis, id repellendus minima, nihil error voluptatum porro commodi corrupti neque perspiciatis placeat sit dolor dignissimos tenetur maiores! Labore reprehenderit ea id obcaecati vel aspernatur. Unde, aperiam sint! Deserunt, recusandae.
                                </p>
                                <Link to="" className="leftBottomShop">Shop now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default LandingOne