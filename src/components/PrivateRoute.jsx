import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)
    const isMounted = useRef(true)

    useEffect(()=> {
        if(isMounted){
            const auth = getAuth()
            onAuthStateChanged(auth, (user)=> { 
            if(user){
                setLoggedIn(true)
            }
            setLoading(false)
            })
        }
        return ()=> {
            isMounted.current = false
        }
    }, [isMounted])
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        loggedIn ? <Outlet /> : <Navigate to='/signUp'/>
    )
}

export default PrivateRoute