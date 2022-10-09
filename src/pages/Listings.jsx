import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import ListingItem from "../components/layout/ListingItem"
import { StyledListings } from "../components/styles/Listings.Styled"
import HomePageFooter from "../components/layout/HomePageFooter"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from "../components/layout/CardSkeleton"

const Listings = () => {
    const [listings, setListings] = useState(null)
    const [listingsCopy, setListingsCopy] = useState(null)
    
    const [listingsType, setListingType] = useState('')
    const [loading, setLoading] = useState(false)

    const params = useParams()
    useEffect(()=>{
        setLoading(true)
        const fetchListings = async () => {
            try {
                const listingsRef = collection(db, 'listings')

                
                const querySnap = await getDocs(listingsRef)
                let listings = []
                querySnap.forEach((doc)=> {
                    return listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                setListings(listings)
                setListingsCopy(listings)
                console.log(listings.data);
                setLoading(false)

            }  catch (error){
                toast.error('could not fetch listings')
            }
        }
        fetchListings()
    }, [])

    
        const handleChange = (e) => {
            setListingType(e)
            const filterListings = (listingtype) => {
                const filteredList = listings.filter((listing)=> listing?.data?.type.toLowerCase().includes(listingtype.toLowerCase()))
                setListingsCopy(filteredList)
            }
            filterListings(e)
        
            
        }
    

    

    
    return (
        <>

        <StyledListings  className='container'> 
            <h2>Available <span>Listings</span></h2>
            <p>Below are our available listings. click any listing to view more information</p>
            <div className="filter-container">
                <div className="label">
                    <i className="fa-solid fa-sort"></i>     
                    <label htmlFor="filter">Filter</label>
                </div>           
                <select id="filter" 
                value={listingsType}
                onChange={(e)=>handleChange(e.target.value)}>
                    <option value="">Type</option>
                    <option value="rent">Rent</option>
                    <option value="sale">Sale</option>

                </select>
            </div>
            <div className="grid-container">
                {
                    loading ? <CardSkeleton cards={8}/> : listingsCopy?.map((item)=>(
                        <ListingItem key={item.id} listingData={item.data} listingId={item.id}/>
                    ))
                    
                }
                
                
            </div>
        </StyledListings>
        <HomePageFooter />
        </>
    )
}

export default Listings