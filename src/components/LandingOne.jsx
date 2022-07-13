import React, { Fragment } from 'react'
import '../styles/css/landingOne.css'
import CentImage from '../images/jumb_kibet.png'
import { Link } from 'react-router-dom'
import { ReactComponent as Ratings } from '../images/ratings.svg'
import BucketHat from '../images/bucketHat.jpg'
import Hoodie from '../images/hoodie.webp'
import denimJeans from '../images/denimJeans.jpg'

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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque, veritatis, id repellendus minima, nihil error voluptatum porro commodi corrupti neque perspiciatis placeat sit dolor.
                                </p>
                                <Link to="" className="leftBottomShop">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ovPatchyOne">
                        <div className="PatchyOvWrapper">
                            <div className="attractaImagio">
                                <img src={BucketHat} alt="" />
                            </div>
                            <div className="attractaInfo">
                                <h2 className="itName">Bucket Hat Fashion</h2>
                                <h3 className="itPrice">$ 12.00 USD</h3>
                                <div className="itRatings">
                                    <Ratings className="ovRatings" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ovPatchyTwo">
                        <div className="PatchyOvWrapper">
                            <div className="attractaImagio">
                                <img src={Hoodie} alt="" />
                            </div>
                            <div className="attractaInfo">
                                <h2 className="itName">Sporty Classic Hoodie</h2>
                                <h3 className="itPrice">$ 70.00 USD</h3>
                                <div className="itRatings">
                                    <Ratings className="ovRatings" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ovPatchyThree">
                        <div className="PatchyOvWrapper">
                            <div className="attractaImagio">
                                <img src={denimJeans} alt="" />
                            </div>
                            <div className="attractaInfo">
                                <h2 className="itName">denim jeans</h2>
                                <h3 className="itPrice">$ 106.00 USD</h3>
                                <div className="itRatings">
                                    <Ratings className="ovRatings" />
                                </div>
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