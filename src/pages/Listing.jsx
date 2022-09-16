import { useState, useEffect, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { StyledListing } from "../components/styles/Listing.Styled"
import next from '../assets/next(1).png'
import prev from '../assets/previous.png'


import { getAuth } from "firebase/auth"
import { getDoc, doc} from "firebase/firestore"
import { db } from "../firebase.config"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation, EffectFade, Pagination } from 'swiper'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination';

const Listing = () => {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(false)
    const [shareLinkCopied, setShareLinkCopied] = useState(false)

    const swiperPrevRef = useRef(null)
    const swiperNextRef = useRef(null)

    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth()

    useEffect(() => {
        const fetchListing = async () => {
            setLoading(true)
            const docRef = doc(db, 'listings', params.listingId)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setListing(docSnap.data())
                setLoading(false)
            }
        }
        
        fetchListing()
    }, [params.listingId])

    if(loading){
        return <h2>loading...</h2>
    }

    const discount = () => {
        if(listing) {
            const price =listing.discountedPrice
            const slashedPrice = listing.regularPrice
            const difference = slashedPrice - price

            return (difference /slashedPrice) * 100
        }
    }
    discount()
    
    
    return (
        listing && 
        
        <StyledListing className="container">
            <div className="flex main">
                <div className="listing-details">
                    <p className="name">{listing?.name}</p>
                    <div className="flex location"><i className="fa-solid fa-location-dot"></i><p>{listing.address}</p></div>
                    <div className="flex discount-type">
                        <div className="tag type">
                            {listing.type === 'rent' ? 'rent' : 'sale'}
                        </div>
                        {
                            listing.offer && <div className="tag">
                                discount
                            </div> 
                        }

                        {
                            listing.offer && <span className="tag">
                                -{discount()}%
                            </span>
                        }

                        
                    </div>

                    <div className="rooms">
                        <p>bedrooms {listing.bedrooms}. bathrooms {listing.bathrooms}. kitchen {listing.kitchen}</p>
                    </div>

                    <div className="price flex">
                            <div className="regular-price">
                                ${listing.regularPrice.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{listing.type === 'rent' && '/month'}
                            </div>
                            <div className="discount-price">
                                ${listing.discountedPrice.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </div>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, EffectFade, Pagination]}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl:swiperPrevRef.current,
                        nextEl: swiperNextRef.current,
                    }}
                    effect
                    speed={700}
                    slidesPerView={1}
                    className="swiper"

                    onInit={(swiper)=> {
                        swiper.params.navigation.prevEl = swiperPrevRef.current;
                        swiper.params.navigation.nextEl = swiperNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    
                >
                    {
                        listing?.imgUrls.map((img, index) => (
                            
                            <SwiperSlide key={index} className="swiper-slide">
                                <img src={listing?.imgUrls[index]} alt="" />
                            </SwiperSlide>
                            
                        ))
                    }
                    
                    <div className="swiper_nav-prev" ref={swiperPrevRef}>
                    <img src={prev} alt="" />
                    </div>

                    <div className="swiper_nav-next" ref={swiperNextRef}>
                        <img src={next} alt="" />
                    </div>
                </Swiper>
            </div>
        
        
        <div className="house-assets">
            <h2>What this place <span >offers.</span></h2>
            <div className="assets-container">
                <div className="col-1">
                    <div className="row">
                        <i class="fa-solid fa-bed"></i> <p>{listing.bedrooms} Bedrooms</p>
                    </div>

                    <div className="row">
                        <i className="fa-solid fa-bath"></i> <p>{listing.bathrooms} Bathrooms</p>
                    </div>

                    <div className="row">
                        <i className="fa-solid fa-kitchen-set"></i> <p>{listing.kitchen} Kitchen</p>
                    </div>
                </div>
                
                <div className="col-2">
                    {
                        listing.pool && <div className="row">
                        <i className="fa-solid fa-couch"></i><p>{listing.furnished} Furnished</p>
                    </div>
                    }
                    {
                        listing.pool && <div className="row">
                        <i className="fa-solid fa-water-ladder"></i><p>{listing.pool} pool</p>
                    </div>
                    }
                    
                    {
                        listing.parking && <div className="row">
                        <i className="fa-solid fa-square-parking"></i><p>{listing.parking} parking</p>
                    </div>
                    
                    }
                </div>


            </div>
        </div>
        
        
    </StyledListing>
    )
}

export default Listing