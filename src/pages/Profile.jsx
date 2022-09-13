import React from 'react'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, updateDoc} from "firebase/firestore";
import { updateProfile } from 'firebase/auth';
import { db } from '../firebase.config';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom"
import   { ReactComponent as Spinner } from '../assets/spinner.svg'




import { useEffect, useState } from "react"
import { toast } from 'react-toastify'

import { StyledProfile } from '../components/styles/Profile.styled'
import profileImg from '../assets/profile picture.jpg'
import { async } from '@firebase/util';
const Profile = () => {
    const auth = getAuth()
    const storage = getStorage();
    const navigate = useNavigate();

    console.log(auth.currentUser.uid);
    
    const [profile, setProfile] = useState(false)
    const [formData, setFormData] = useState(false)
    const [formEnabled, setFormEnabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [spinnerLoader, setSpinnerLoader] = useState(false)
    const [key, setKey] = useState(false)

    const {name, email, photoURL, bio, image} = formData 

    
    
    
    useEffect(()=>{
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
        

        }
        getProfile()
    }, [])
    
    const reloadComponent = ()  => {
        setKey(!key)
    }
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

    console.log(profile);
        console.log(formData);
    
    const onLogout = () => {
        auth.signOut()
        navigate('/')
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

    

    

    return (
        profile &&
        <StyledProfile className='container'>
            <div >
                
                <div className="col-left">
                    <div className="profile-pic-container">
                        <img src={profile.photoURL ? profile.photoURL : profileImg} alt="" />
                        <p className='profile-name'> {profile?.name}</p>
                        <p className='joined'>Joined {new Date(profile?.timestamp.seconds * 1000 ).getFullYear()}</p>
                        <label htmlFor="photoUrl">Update profile picture</label>
                        <input type="file" id='photoUrl' max='1' accept='.jpg,.png,.jpeg' onChange={onChange} />
                    </div>

                    <Link to='/createListing' className='create-listing'>
                        <p>sell or rent your home</p> <i className="fa-solid fa-arrow-right"></i>
                    </Link>

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
                            <textarea value={bio} id="bio" rows='12'onChange={onChange}></textarea>
                        </div>
                        
                        <button className='save-btn'  disabled={!formEnabled} >{spinnerLoader ?<Spinner width={'25px'} height={'25px'}/> : 'Save' } </button>
                    </form>
                    <button onClick={onLogout}>log-out</button>
                </div>
                
            </div>
        </StyledProfile>
    )
}

export default Profile
