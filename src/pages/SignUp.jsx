import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import  { db } from '../firebase.config'


import SignUpImg from '../assets/sign-up.jpg'
import Oauth from "../components/layout/Oauth"
import { StyledSignUp } from "../components/styles/SignUp.Styled"
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:''
    })
    
    const {name, email, password}= formData


    const [passwordVisisbility, setPasswordVisibility] = useState(false)
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.id] : e.target.value
            }
        ))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const auth  = getAuth()
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password )
            //used to get id for saving in the database
            const user = userCredentials.user

            //add the display name to user information
            updateProfile(auth.currentUser, {
                displayName: name
            })
            
            //make copy of formData. also add timestamp
            const formDataCopy = {...formData}
            formDataCopy.timestamp = serverTimestamp()
            // delete password from formData
            delete formDataCopy.password
            
            //add user to database saved in collection 'users'
            await setDoc(doc(db, "users", user.uid), formDataCopy)
            toast.success('Account successfully created')
            navigate('/')

            
        } catch (error) {
            toast.error('Could not create account, please try again')
        }
    }
    return (
        <StyledSignUp className='container'>
            <div className="image-container">
                <img src={SignUpImg} alt="image of a storey building" />
                <div className="image-text">
                    You are just a few clicks away from finding your dream home
                </div>
            </div>
            <div className="form-container">
                <div>
                    <h2>Sign Up</h2>
                    <p>Welcome! please enter your details</p>
                    <form onSubmit={onSubmit}>
                        <div className="name">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter your name" required id="name" value={name}onChange={onChange}/>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Enter your email" required id="email"value={email}onChange={onChange}/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter your password" required id="password"value={password}onChange={onChange}/>
                            
                        </div>
                        <button >Sign In</button>

                    </form>  
                    <div className="or-container">
                        <hr />
                        <div>
                            <p>Or</p>
                        </div>
                    </div>
                    <Oauth />
                    <p className="signIn">Alredy have an account? <Link to='/signIn' className="signIn -link">Sign-in</Link></p>
                </div>
            </div>
            
        </StyledSignUp>
    )
}

export default SignUp