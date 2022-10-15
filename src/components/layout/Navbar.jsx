import logo from '../../assets/camera-flash-selected-svgrepo-com.svg'
import hamburger from '../../assets/hamburger.png'

import { Link, NavLink } from 'react-router-dom'
import { StyledNavbar } from '../styles/Navbar.Styled'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc} from "firebase/firestore";
import { db } from '../../firebase.config';
import profileImg from '../../assets/Avatar.png'

import { useState, useEffect, useRef } from 'react';



const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const isMounted = useRef(true)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(()=> {
        if(isMounted){
            const auth = getAuth()
            onAuthStateChanged(auth, (user)=> {
                if(user){
                    setLoggedIn(true)

                    const fetchUser = async ()  => {
                        const profileSnap = await getDoc(doc(db, 'users',auth.currentUser.uid ))
                        setUser(profileSnap.data())
                    }
                    fetchUser()
                }
            })

        }
        return ()=> {
            isMounted.current = false
        }
    }, [isMounted])

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState)
        
    }
    const closeMenu = () => {
        setShowMenu(false)
    }
    

    return (
        <StyledNavbar className='container'>
            <div className="hamburger-div" onClick={toggleMenu}>
                <img src={hamburger} alt=""  />
            </div>
            <Link to='/' className='logo-link'>
                <div className="logo-container">
                    <img src={logo} alt="" />
                    <h2>Home<span>Hub</span></h2>
                </div>
            </Link>
            

            <div className="nav-links">
                <div className={showMenu ? 'main-links show-menu' : 'main-links'}>
                    <NavLink to='/' onClick={closeMenu}>
                        <p>Home</p>
                    </NavLink>
                    

                    <NavLink to='/listings' onClick={closeMenu}>
                        <p>Listings</p>
                    </NavLink>

                    <NavLink to='/createListing' onClick={closeMenu}>
                        <p>Create-Listing</p>
                    </NavLink>

                    {
                        !loggedIn && <NavLink to='/profile'onClick={closeMenu}>
                                        <p>Profile</p>
                                    </NavLink> 
                    }
                </div>
                {
                    loggedIn &&  
                    <NavLink to='/profile'className='profile' onClick={closeMenu}>
                        <div className="profile-img">
                            <img src={user?.photoURL ? user?.photoURL : profileImg} alt="" />
                        </div>
                    </NavLink>
                }
            </div>
            
            {
                !user && <div className="register-signIn">
                            <NavLink to='/signIn' onClick={closeMenu}>
                                <p>Log-In</p>
                            </NavLink>

                            <NavLink to='/signUp' className='register' onClick={closeMenu}>
                                <p>Register</p>
                            </NavLink>
                        </div> 

            
            }

        </StyledNavbar>
    )
}

export default Navbar