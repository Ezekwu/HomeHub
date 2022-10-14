import React from 'react'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, updateDoc,  collection, getDocs, query, where, orderBy, limit, startAfter, deleteDoc} from "firebase/firestore";
import ListingItem from '../components/layout/ListingItem';

import { updateProfile } from 'firebase/auth';
import { db } from '../firebase.config';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom"
import   Spinner  from '../assets/Dual Ring-1s-200px.svg'
import Loader from '../components/layout/Loader';




import { useEffect, useState } from "react"
import { toast } from 'react-toastify'

import { StyledProfile } from '../components/styles/Profile.styled'
import profileImg from '../assets/Avatar.png'
import { async } from '@firebase/util';
const Profile = () => {
    const auth = getAuth()
    const storage = getStorage();
    const navigate = useNavigate();
    
    
    const [profile, setProfile] = useState(false)
    const [formData, setFormData] = useState(false)
    const [profileId, setProfileId] = useState(null)
    const [formEnabled, setFormEnabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [spinnerLoader, setSpinnerLoader] = useState(false)
    const [listings, setListings] = useState(false)
    
    const {name, email, photoURL, bio, image} = formData 

    
    
    
    useEffect(()=>{
        setLoading(true)
        const getProfile = async () =>{
        const profileSnap = await getDoc(doc(db, 'users',auth.currentUser.uid ))
        let profileCopy = {...profileSnap.data()}
        
        setProfile(profileCopy)

        setFormData({
            name:auth.currentUser.displayName,
            email:auth.currentUser.email,
            photoURL:profileCopy.photoURL ? profileCopy.photoURL : null,
            bio: profileCopy.bio ? profileCopy.bio : null,
            image: []
        })
        console.log(auth.currentUser.uid);
        const listingsRef = collection(db, 'listings')
        const q = query(listingsRef, 
            where('userRef', '==', auth.currentUser.uid)
            )
            const querySnap = await getDocs(q)
            let listing = []
            querySnap.forEach((doc)=> {
                return listing.push({
                    id: doc.id,
                    data: doc.data()
                }) 
            })
            
                setListings(listing)
            
            setLoading(false)
        }
        getProfile()

    
    }, [auth.currentUser.uid])
    
    
    const onChange = (e) =>{
        setFormEnabled(true)
        
        if(e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                image: e.target.files
            }))
        }

        if(!e.target.files){
            setFormData((prevState) => (
                {
                    ...prevState,
                    [e.target.id] : e.target.value
                }
            ))
        }

        
        
    }

    
    
    const onLogout = () => {
        auth.signOut()
        navigate('/')
        window.location.reload()
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setSpinnerLoader(true)
        try {
            const storeImage = async (image) => {
                return new Promise((resolve, reject) => {
                    
                    const fileName = `${auth.currentUser.uid}-${image.name}}`
    
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
                        setSpinnerLoader(false)
                    }, 
                    () => {
            
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve( downloadURL);
                        });
                    }
                    );
    
                })
            }
            const imageUrls = await Promise.all(
                [...image].map(image=> storeImage(image))
            ).catch(()=>{
                setSpinnerLoader(false)
                toast.error('image not uploaded')
            })
            updateProfile(auth.currentUser, {
                displayName: name,
                email: email,
                photoURL: imageUrls[0],

            })

            const userRef = doc(db, 'users', auth.currentUser.uid)
            await updateDoc(userRef, {
                name: name,
                email: email,
                bio: bio,
                photoURL:  imageUrls[0]
            })
            setSpinnerLoader(false)
            
            window.location.reload()
            
            
            
            
            } catch (error) {
                setSpinnerLoader(false)
                toast.error('could not update profile')
            }
}

    const deleteListing = async (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            const document = await deleteDoc(doc(db, 'listings', id))
            const updatedListings = listings.filter((listing)=> listing.id !== id)
            setListings(updatedListings)
            toast.success('successully deleted listings')
        }
    }

    const onEdit = (id) => {
        navigate(`/editListings/${id}`)
    }

    if(loading){
        return <Loader />
    }

    return (
        profile &&
        <StyledProfile className='container'>
            <h2 >My <span>Profile.</span></h2>
            <div className='main'>
                
                <div className="col-left">
                    <div className="profile-pic-container">
                        <img src={profile.photoURL ? profile.photoURL : profileImg} alt="" />
                        <p className='profile-name'> {profile?.name}</p>
                        <p className='joined'>Joined {new Date(profile?.timestamp?.seconds * 1000 ).getFullYear()}</p>
                        <label htmlFor="photoUrl">Update profile picture</label>
                        <input type="file" id='photoUrl' max='1' accept='.jpg,.png,.jpeg' onChange={onChange} />
                    </div>

                    

                </div>
                <div className="profile-details col-right">
                    <form onSubmit={onSubmit}>
                        <div className="col-1">
                            <div className="name">
                                <label htmlFor="name">name</label>
                                <input type="text" value={name} id='name' required onChange={onChange} />
                            </div>
                            <div className="email">
                                <label htmlFor="name">email</label>
                                <input type="text" value={email}  id='email' required onChange={onChange} />
                            </div>
                        </div>
                        <div className="bio">
                            <label htmlFor="name">bio</label>
                            <textarea value={bio} id="bio" rows='8'onChange={onChange}></textarea>
                        </div>
                        
                        <button className='save-btn'  disabled={!formEnabled} >{spinnerLoader ?<Spinner width={'25px'} height={'25px'}/> : 'Save' } </button>
                    </form>
                    
                </div>
                
            </div>
            {
                listings &&
                <div className="your-listings">   
                    <h3>Your Listings</h3>
                    <div className="listings-container">
                        {
                            listings.map((item)=>(
                                <ListingItem listingData={item.data} listingId={item.id} key={item.id} onDelete={()=> deleteListing(item.id)}  onEdit={()=> onEdit(item.id)}/>
                            ))
                        }
                    </div>
                </div>
            }
            <Link to='/createListing' className='create-listing'>
                        <p>sell or rent your home?</p> <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <button onClick={onLogout} className='log-out'><p>log-out</p><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
        </StyledProfile>
    )
}

export default Profile
