import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import ListingItem from "../components/layout/ListingItem"
import { StyledListings } from "../components/styles/Listings.Styled"

const Listings = () => {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)

    const params = useParams()
    useEffect(()=>{
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
                console.log(listings.data);
                setLoading(false)

            }  catch (error){
                toast.error('could not fetch listings')
            }
        }
        fetchListings()
    }, [])

    // const filterListings = (type) => {
    //     const filteredList = listings.filter(()=> listings.type.toLowerCase().includes(type.toLowerCase()))
    //     setListings(filteredList)
    // }

    if(loading) {
        return <h2>hello...</h2>
    }

    
    return (
        listings && <StyledListings  className='container'> 
            
            {listings?.map((item)=>(
                <ListingItem key={item.id} listingData={item.data} listingId={item.id}/>
            ))}
        </StyledListings>
    )
}

export default Listings