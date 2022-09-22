import { useState, useRef } from "react"
import { Link } from 'react-router-dom'
import { StyledListingItem } from "../styles/ListingItemStyled"
import next from    '../../assets/next(1).png'  
import prev from '../../assets/previous.png'

import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation, EffectFade, Pagination } from 'swiper'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ListingItem = ({listingData, listingId}) => {
    const swiperPrevRef = useRef(null)
    const swiperNextRef = useRef(null)


    return (
        <StyledListingItem>
                    
                        <div className="img-container">
                            <img src={listingData.imgUrls[0]} alt="" />
                        </div>
                    
                <div className="details">
                    <h3 className="name">{listingData.name}</h3>
                    <p className="address"><i className="fa-solid fa-location-dot"></i>{listingData.address} </p>
                    <div className="rooms">
                        <span><i className="fa-solid fa-bed"></i> {listingData.bedrooms} bedrooms</span>
                        <span><i className="fa-solid fa-bath"></i> {listingData.bathrooms} bathrooms</span>
                    </div>
                    <div className="price-view">
                        <h3 className="price">${listingData.regularPrice.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            {listingData.type === 'rent' && <p>/month</p>}
                        </h3>
                        <Link to>
                            view
                        </Link>
                    </div>
                </div>
        </StyledListingItem>
    )
}

export default ListingItem