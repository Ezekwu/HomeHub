import { useState, useEffect } from "react"
import { useSearchParams, useParams } from "react-router-dom"
import { db } from "../firebase.config"
import { doc, getDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { StyledContact } from "../components/styles/Contact.styled"
import HomePageFooter from "../components/layout/HomePageFooter"
import Loader from "../components/layout/Loader"
const Contact = () => {
    const [message, setMessage] = useState('')
    const [ landlord, setLandlord] = useState(null)
    const [loading, setLoading] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    
    const params = useParams()
    useEffect(() => {
        setLoading(true)
        const getLandlord = async () => {
            const docRef = doc(db, 'users', params.landlordId)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                setLandlord(docSnap.data())
                setLoading(false)
            } else {
                setLoading(false)
                toast.error('Could not get landlord data')
            }
        }
        getLandlord()
    }, [params.landlordId])

    const onChange = (e) => {
        setMessage(e.target.value)
    }
    if(loading) {
        return <Loader />
    }
    return (
        <>
            <StyledContact className="container">
                <h2>Contact <span>Landlord</span></h2>
                {
                    landlord && <main>
                        <p>Leave a message for {landlord.name}</p>

                        <form >
                            <div className="messageDiv">
                                <textarea name="message" id="message"  value={message} onChange={onChange}></textarea>
                            </div>
                            <a href={`mailto:${landlord.email}?subject=${searchParams.get('listingName')}&body=${message}`}>
                                <button type="button" className="primaryButton">Message</button>
                            </a>
                        </form>
                    </main>
                }
            </StyledContact>
            <HomePageFooter />
        </>
    )
}

export default Contact