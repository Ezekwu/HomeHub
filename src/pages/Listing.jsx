import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getAuth } from "firebase/auth"
import { getDoc, doc} from "firebase/firestore"
import { db } from "../firebase.config"

const Listing = () => {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [shareLinkCopied, setShareLinkCopied] = useState(false)

    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth()

    useEffect(() => {
        const fetchListing = async () => {
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


    return (
        <div className="container">
            <p>{listing?.name}</p>
            <img src={listing?.imgUrls[0]} alt="" />
        </div>
    )
}

export default Listing