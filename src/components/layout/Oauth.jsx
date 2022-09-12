import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import { toast } from 'react-toastify'
import GoogleIcon from '../../assets/google-pngrepo-com.png'
const Oauth =  () => {
    const navigate = useNavigate()
    const location = useLocation()
    const onGoogleAuthClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const userCredentials =  await signInWithPopup(auth, provider)

            //get snapShot of user
            const user = userCredentials.user
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            //add user to dataBase if user doesn't exists
            if(!docSnap.exists()){
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate('/')
            toast.success(`Successfully signed ${location.pathname === '/signUp' ? 'up' : 'in'}`)
        } catch (error) {
            toast.error('Failed to authenticate with google')
        }
    }
    return (
        <div  className='google-auth' onClick={onGoogleAuthClick}>
            <img src={GoogleIcon} alt=""  width={'25px'}/>
            <p>Sign{location.pathname === '/signUp' ? '-up' : '-in'} with google</p>
        </div>
    )
}

export default Oauth