import { useState, useEffect, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { StyledListing } from "../components/styles/Listing.Styled"

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
                console.log(listing);
                setLoading(false)
            }
        }
        
        fetchListing()
    }, [params.listingId])

    if(loading){
        return <h2>loading...</h2>
    }
    
    return (
        listing && 
        
        <StyledListing className="container">
        <p>{listing?.name}</p>
        <p>{listing?.address}</p>    
        {/* <img src={listing?.imgUrls[2]} alt="" width={'1000px'} height={'300px'}/> 
         */}
        
        

        <Swiper
            modules={[Navigation, EffectFade, Pagination]}
            pagination={{ clickable: true }}
            navigation={{
                prevEl: swiperPrevRef.current,
                nextEl: swiperNextRef.current
            }}
            effect
            speed={700}
            slidesPerView={1}
            
            className="swiper"
            
        >
            {
                listing?.imgUrls.map((img, index) => (
                    
                    <SwiperSlide key={index} className="swiper-slide">
                        <img src={listing?.imgUrls[index]} alt="" />
                    </SwiperSlide>
                    
                ))
            }
            <div className="swiper-prev" ref={swiperPrevRef}></div>
            <div className="swiper-next" ref={swiperNextRef}></div>

        </Swiper>
    </StyledListing>
    )
}

export default Listing