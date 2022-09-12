import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import SigninImg from '../assets/sign-up2.jpg'
import Oauth from "../components/layout/Oauth"
import { StyledSignUp } from "../components/styles/SignUp.Styled"
const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password:''
    })

    const { email, password }= formData

    const [passwordVisisbility, setPasswordVisibility] = useState(false)
    const navigate = useNavigate()

    const onChange = (e) => {
        
        setFormData((prevState)=>(
            {
                ...prevState,
                [e.target.id] : e.target.value
            }
        ))
        
    }

    const onSubmit =async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if(userCredential.user){
                navigate('/')
            }
            toast.success('login successful')
        } catch (error) {
            toast.error('Incorrect user credentials')
        }
    }
    return (
        <StyledSignUp className='container'>
            <div className="image-container">
                <img src={SigninImg} alt="image of a storey building" />
                <div className="image-text">
                    You are just a few clicks away from finding your dream home
                </div>
            </div>
            <div className="form-container">
                <div>
                    <h2>Sign In</h2>
                    <p>Welcome back! please enter your details</p>
                    <form onSubmit={onSubmit}>
                        
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Enter your email" id="email" value={email} onChange={onChange} required/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter your password" id="password" value={password} onChange={onChange} required/>
                            
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
                    <p className="signIn">Don't have an account? <Link to='/signUp' className="signIn -link">Sign-up</Link></p>
                </div>
            </div>
            
        </StyledSignUp>
    )
}

export default SignIn