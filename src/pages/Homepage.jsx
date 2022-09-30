import { useState, useEffect } from "react"

import { StyledHomePage } from "../components/styles/HomePage.Styled"
import HomePageFooter from "../components/layout/HomePageFooter"
import { Link } from "react-router-dom"
import heroImg from '../assets/pexels-max-vakhtbovych-7031607.jpg'
import amazon from '../assets/amazon-2-logo-svgrepo-com.svg'
import airbnb from '../assets/airbnb-2-logo-svgrepo-com.svg'
import booking from '../assets/bookingcom-logo-svgrepo-com.svg'
import google from '../assets/google-svgrepo-com.svg'
import microsoft from '../assets/microsoft-svgrepo-com.svg'
import offer from '../assets/what-we-offer-img.jpg'
import dollar from '../assets/dollar.png'
import payment from '../assets/dollar(1).png'
import insurance from '../assets/life-insurance.png'
import createListing from '../assets/create-listing.jpg'
import signUpImg from '../assets/features.jpg'
import ListingItem from "../components/layout/ListingItem"

import { toast } from "react-toastify"


import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from "../firebase.config"

const Homepage = () => {
    const [listings, setListings] = useState(null)

    useEffect(()=>{
        const fetchListings = async () => {
            try {
                const listingsRef = collection(db, 'listings')

                const q = query(listingsRef, 
                where('latest', '==', true)
                )
                const querySnap = await getDocs(q)
                let listings = []
                querySnap.forEach((doc)=> {
                    return listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                setListings(listings)
                

            }  catch (error){
                toast.error('could not fetch listings')
            }
        }
        fetchListings()
    }, [])
    return (
        <div >
            
        <StyledHomePage  className="container">
            <main style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: '20%',
            height:'80vh',
            borderRadius: '20px'
            }}>
                <div>
                    <h1>Let's find a home that's perfect for <span>you.</span></h1>
                    <p>HomeHub brings you  closer to your dream  <br /> home by  offering you mutiple cosy homes according to your preference.</p>
                    
                    <Link to='/listings'>
                        Get Started
                    </Link>
                </div>
            </main>
            <section className="companies">
                <h4>Trusted by <span>20,000+</span> companies</h4>
                <div className="imgs-container">
                    <img src={google} alt="" className="google" />
                    <img src={amazon} alt="" className="amazon"/>
                    <img src={booking} alt="" className="booking" />
                    <img src={airbnb} alt="" className="airbnb" />
                    <img src={microsoft} alt="" className="microsoft"/>
                </div>
            </section>
            <section className="what-we-do">
                <div className="col-left">
                    <h2>Why do you choose us?</h2>
                    <div className="row">
                        <div className="icon-div">
                            <img src={payment} alt="" className="payment"/>
                        </div>
                        <div className="details">
                            <h3>Easy Payment</h3>
                            <p>The payment we provide is easy. we provide different kind of online wallets</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="icon-div">
                            <img src={dollar} alt="" />
                        </div>
                        <div className="details">
                            <h3>Affordable Prices</h3>
                            <p>The houses we provide are afordable and guaranteed quality</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="icon-div">
                            <img src={insurance} alt="" className="insurance"/>
                        </div>
                        <div className="details">
                            <h3>Property</h3>
                            <p>All our houses have insurance.In case of any damages, we get to bare some of the risk.</p>
                        </div>
                    </div>
                </div>

                <div className="col-right">
                    <img src={offer} alt="" />
                </div>
            </section>

            {
                listings && 
                <section className="popular-listings">
                    <h2>Popular Listings</h2>
                    <p>Here are the most popular listings up for sale and rent . all our properties are in good conditions and have standard amenities and are in a <br /> good and secure location</p>
                    <div className="listings-container">
                        {listings?.map((item)=>(
                            <ListingItem key={item.id} listingData={item.data} listingId={item.id} className='listing'/>
                        ))}
                    </div>
                    <Link to='/listings'>View more</Link>
                </section>
            }

            <section className="make-listing">
                <div className="col-left">
                    <img src={createListing} alt="" />
                </div>

                <div className="col-right">
                    <h2>Set a house up for sale or rent?</h2>
                    <p>Do you have a house up for sale? You can create a listing buy providing the neccessary data for your property and have customers email you directly. Just follow the steps below.</p>
                    <div className="listing-steps">
                        <div className="card">
                            <div>
                            <i className="fa-solid fa-pen-to-square"></i>
                            </div>
                            <h3>Create a listing</h3>
                        </div>

                        <div className="card">
                            <div><i className="fa-solid fa-file-invoice"></i></div>
                            <h3>Provide data</h3>
                        </div>

                        <div className="card">
                            <div><i className="fa-solid fa-cloud-arrow-up"></i></div>
                            <h3>Upload listing</h3>
                        </div>
                    </div>
                    <Link to='/createListing'>
                        Get Started
                    </Link>
                </div>
            </section>

            <section className='register'>
                <div className="col-1">
                    <h2>Sign up with us and enjoy exclusive access</h2>
                    <p>Sign up with us and have access to all the features HomeHub has to offer</p>
                    <div className="features">
                        <div className="feature-container">
                            <div className="tick-icon"><i className="fa-solid fa-check"></i></div>
                            <p>Get notified whenever there is a new listing</p>
                        </div>

                        <div className="feature-container">
                            <div className="tick-icon"><i className="fa-solid fa-check"></i></div>
                            <p>Be able to make a listing and maintain it</p>
                        </div> 

                        <div className="feature-container">
                            <div className="tick-icon"><i className="fa-solid fa-check"></i></div>
                            <p>Place an order on a property and get a discont with insurance your property</p>
                        </div>
                    </div>
                    <Link to='/signUp'>SignUp</Link>
                </div>

                <div className="col-2">
                    <img src={signUpImg} alt="" />
                </div>
            </section>

            
        </StyledHomePage> 
        <HomePageFooter/>
        </div>
    )
}

export default Homepage