import { StyledCreateListing } from "../components/styles/CreaterListing.Styled"
import { useState, useEffect, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, doc, getDoc, updateDoc } from 'firebase/firestore'
import   { ReactComponent as Spinner } from '../assets/spinner.svg'
import {db} from '../firebase.config'
import { useNavigate, useParams } from "react-router";
import { toast } from 'react-toastify' 
import { v4 as uuidv4 } from 'uuid';
import HomePageFooter from "../components/layout/HomePageFooter";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const EditListings = () => {
    const [loading, setLoading] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [listing, setlisting] = useState(false)
    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: '',
        bathrooms: '',
        parking: false,
        furnished: false,
        pool: false,
        kitchen:'',
        address:'',
        offer: false,
        regularPrice:0,
        discountedPrice: 0,
        images: [],
        latitude: 0,
        longitude: 0
    })

    const {
        type,
        name,
        bedrooms,
        bathrooms,
        parking,
        furnished,
        pool,
        kitchen,
        address,
        offer,
        regularPrice,
        discountedPrice,
        images,
        latitude,
        longitude
    } = formData

    const auth = getAuth()
    const navigate = useNavigate()
    const params = useParams()
    const isMounted = useRef(true)
    

    useEffect(() => {
        if(listing && listing.userRef !== auth.currentUser.uid) {
            toast.error('you cannot edit this listing')
            navigate('/')
        }
    })

    useEffect(() => {
        setLoading(true)
        const getListing = async () => {
            const docRef = doc(db, 'listings', params.lidtingId)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()) {
                setlisting(docSnap.data())
                setFormData({...docSnap.data()})
                setLoading(false)
            } else{
                navigate('/')
                toast.error('listing is false')
            }
        }

        getListing()
    }, [params.lidtingId, navigate])
    useEffect(()=>{
        if(isMounted){
            onAuthStateChanged(auth, (user)=>{
                if(user) {
                    setFormData({...formData, userRef: user.uid})
                } else{
                    navigate('/signIn')
                }
            })
        }

        return () => {
            isMounted.current = false
        }
    }, [isMounted])

    const onMutate = (e)=>{
        
        let booleen = null
        if(e.target.value === 'true'){
            booleen = true
        }
        if(e.target.value === 'false'){
            booleen = false
        }

        if(e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                images: e.target.files
            }))
        }

        if(!e.target.files) {
            setFormData((prevState)=>({
                ...prevState,
                [e.target.id]: booleen ?? e.target.value
            }))
        }


    }

    const onSubmit = async (e) => {
        e.preventDefault()
        
        setSpinner(true)

        if(discountedPrice >= regularPrice){
            setSpinner(false)
            toast.error('Discounted price has to be less than Regular price')
            return
        }
        if(images.length > 6) {
            setSpinner(false)
            toast.error('Max 6 images')
            return
        }

        //store image in firebase
        const storeImage = async (image) => {
            return new Promise((resolve, reject) => {
                const storage = getStorage()
                const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`

                const storageRef = ref(storage, 'images/' + fileName)
                
                const uploadTask = uploadBytesResumable(storageRef, image);
                uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                    reject(error)
                }, 
                () => {
        
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve( downloadURL);
                    });
                }
                );

            })
        }
        
        const imgUrlsReverse = await Promise.all(
            [...images].map(image=> storeImage(image))
        ).catch(()=>{
            setSpinner(false)
            toast.error('image not uploaded')
        })
        const imgUrls = imgUrlsReverse.reverse();

        const formDataCopy = {
            ...formData,
            imgUrls,
            timestamp: serverTimestamp(),
        }
        
        delete formDataCopy.images
        !formDataCopy.offer && delete formDataCopy.discountedPrice
        
        const docRef = doc(db, 'listings', params.lidtingId)
        await updateDoc(docRef, formDataCopy)
        setSpinner(false)
        toast.success('Listing saved succesfully')
        navigate(`/category/${formData.type}/${docRef.id}`)
    }

    return (
        <>

        <StyledCreateListing className='container'>
            <div className="heading">
                <h1>Edit your <span>listing.</span></h1>
                
            </div>
            <p className="info">Please fill in the neccessary information for your current listing. <br /> NOTE: listing images uploded should be a maximum of six with the first uploaded image being  first in display.</p>
            <form onSubmit={onSubmit}>
                <div className="row row-1">
                    <div className="name">
                        {name ? <label htmlFor="name">name</label> : <Skeleton  height={20} width={80}/>}
                        {name ?<input type="text" 
                        id="name"
                        value={name}
                        required
                        maxLength='40'
                        minLength='10'
                        onChange={onMutate}/> : <Skeleton height={30}/>}
                        
                    </div>
                    <div className="boolen-option">
                        { name ? <label htmlFor="" >sale/rent</label> :  <Skeleton style={{marginBottom: '15px'}} height={70} width/>}
                        <div className="flex">
                            {bedrooms ? <button 
                                className={type === 'rent' && "button-false"}
                                onClick={onMutate}
                                type='button'
                                id="type"
                                value='sale'
                            >sale</button> :  <Skeleton height={30}/>}
                            {bedrooms ? <button 
                                className={type === 'sale' && "button-false"}
                                onClick={onMutate}
                                type='button'
                                id="type"
                                value='rent'
                            >rent</button> : <Skeleton height={30}/>}
                        </div>
                    </div>
                </div>
                <div className="row row-2">
                    <div className="bathrooms">
                        {bathrooms ? <label htmlFor="bathrooms">bathrooms <i className="fa-solid fa-bath"></i></label> : <Skeleton style={{marginBottom: '15px'}} height={20} width={80}/>}
                        { bathrooms ? <input type="number" 
                        id="bathrooms"
                        value={bathrooms}
                        min='1'
                        max='50'
                        required
                        onChange={onMutate}/> :<Skeleton height={30}/> }
                    </div>

                    <div className="bedrooms">
                        {bedrooms ? <label htmlFor="bedrooms">bedrooms <i class="fa-solid fa-bed"></i></label>
                        : <Skeleton style={{marginBottom: '15px'}} height={20} width={80}/>}
                        {bedrooms ? <input type="number" 
                        id="bedrooms"
                        value={bedrooms}
                        min='1'
                        max='50'
                        required
                        onChange={onMutate}/>: <Skeleton height={30}/>}
                    </div>
                </div>
                <div className="row row-3">
                    
                    <div className="boolen-option">
                            {parking ? <label htmlFor="" >parking <i className="fa-solid fa-square-parking"></i></label> : <Skeleton  height={70} width/>}
                            <div className="flex">
                                {parking ?  <button 
                                    className={ parking ? '' : "button-false"}
                                    onClick={onMutate}
                                    type='button'
                                    id="parking"
                                    value={true}
                                >yes</button> : <Skeleton />}
                                {parking ? <button 
                                    className={ parking ? "button-false" : ''}
                                    onClick={onMutate}
                                    type='button'
                                    id="parking"
                                    value={false}
                                >no</button> : <Skeleton />}
                            </div>
                    </div>

                        <div className="boolen-option">
                            {parking ? <label htmlFor="" >furnished <i className="fa-solid fa-couch"></i></label> : <Skeleton  height={70} width/>}
                            <div className="flex">
                                {parking ? <button 
                                    className={ furnished ? '' : "button-false"}
                                    onClick={onMutate}
                                    type='button'
                                    id="furnished"
                                    value={true}
                                >yes</button>: <Skeleton />}
                                {parking ? <button 
                                    className={ furnished ? "button-false" : ''}
                                    onClick={onMutate}
                                    type='button'
                                    id="furnished"
                                    value={false}
                                >no</button>: <Skeleton />}
                            </div>
                        </div>
                    </div>

                    <div className="row row-3">
                        <div className="boolen-option">
                            {pool ? <label htmlFor="" >pool <i className="fa-solid fa-water-ladder"></i></label> : <Skeleton  height={70} width/>}
                            <div className="flex">
                                {pool ? <button 
                                    className={ pool ? '' : "button-false"}
                                    onClick={onMutate}
                                    type='button'
                                    id="pool"
                                    value={true}
                                >yes</button>: <Skeleton />}
                                {pool ? <button 
                                    className={ pool ? "button-false" : ''}
                                    onClick={onMutate}
                                    type='button'
                                    id="pool"
                                    value={false}
                                >no</button> : <Skeleton />}
                            </div>
                        </div>

                        <div className="kitchen">
                            {kitchen ? <label htmlFor="bathrooms">kitchen <i className="fa-solid fa-kitchen-set"></i></label>: <Skeleton style={{marginBottom: '15px'}} height={20} width={80}/>}
                            {kitchen ? <input type="number" 
                            id="kitchen"
                            value={kitchen}
                            min='1'
                            max='5'
                            required
                            onChange={onMutate}/>: <Skeleton height={30}/>}
                        </div>
                    </div>

                    {
                        !loading && <div className="row row-4">
                        <div className="flex location">
                            <div className="longitude">
                                <label htmlFor="longitude">longitude</label>
                                <input type="number" 
                                id="longitude"
                                value={longitude}
                                required
                                onChange={onMutate}/>
                            </div>

                            <div className="bedrooms">
                                <label htmlFor="latitude">latitude</label>
                                <input type="number" 
                                id="latitude"
                                value={latitude}
                                required
                                onChange={onMutate}/>
                            </div>
                        </div>

                        <div className="boolen-option">
                        <label htmlFor="" >offer <i className="fa-solid fa-tag"></i></label>
                        <div className="flex">
                                <button 
                                    className={ offer ? '' : "button-false"}
                                    onClick={onMutate}
                                    type='button'
                                    id="offer"
                                    value={true}
                                >yes</button>
                                <button 
                                    className={ offer ? "button-false" : ''}
                                    onClick={onMutate}
                                    type='button'
                                    id="offer"
                                    value={false}
                                >no</button>
                        </div>
                    </div>
                    </div>
                    }

                    {
                        !loading && <div className="row row-5">
                        <div className="regularPrice">
                            <label htmlFor="regularPrice">regular price </label>
                            <div className="flex">
                                <input type="number" 
                                id="regularPrice"
                                value={regularPrice}
                                min='50'
                                max='750000000'
                                required
                                onChange={onMutate}/>
                                {type === 'rent' && <p className=''>$ / Month</p>}
                            </div>
                        </div>
                        { offer && 
                                <div className="discountedPrice">
                                    <label htmlFor="regularPrice">discounted price </label>
                                    <input type="number" 
                                    id="discountedPrice"
                                    value={discountedPrice}
                                    min='50'
                                    max='750000000'
                                    required
                                    onChange={onMutate}/>
                                </div>
                        }
                    </div>
                    }

                    {!loading && <div className="row row-6">
                        <div className="address">
                            <label className='formLabel'>address <i class="fa-solid fa-house"></i></label>
                            <textarea
                                className='address'
                                type='text'
                                rows='12'
                                maxLength='50'
                                id='address'
                                value={address}
                                onChange={onMutate}
                                required
                            />

                        </div>
                    </div>}

                    {!loading && <div className="row row-6">
                        <div className="images">
                            <label htmlFor="images">Upload images <i class="fa-solid fa-camera-retro"></i></label>
                                <input type="file" id='images' max='6' multiple required accept='.jpg,.png,.jpeg' onChange={onMutate} />
                        </div>
                    </div>}
                    {
                        !loading && <button type="submit" className="create-listing">{spinner ? <Spinner width={'25px'} height={'25px'}/> : 'Edit Listing'}</button>
                    }
            </form>
        </StyledCreateListing>
        <HomePageFooter />
        </>
    )
}

export default EditListings