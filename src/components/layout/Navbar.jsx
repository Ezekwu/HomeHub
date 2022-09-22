import logo from '../../assets/camera-flash-selected-svgrepo-com.svg'
import { NavLink } from 'react-router-dom'
import { StyledNavbar } from '../styles/Navbar.Styled'


const Navbar = () => {
    return (
        <StyledNavbar className='container'>
            <div className="logo-container">
                <img src={logo} alt="" />
                <h2>Home<span>Hub</span></h2>
            </div>

            <div className="nav-links">
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>

                <NavLink to='/listings'>
                    <p>Listings</p>
                </NavLink>

                <NavLink to='/createListing'>
                    <p>Create-Listing</p>
                </NavLink>

                <NavLink to='/profile'>
                    <p>Profile</p>
                </NavLink>
            </div>

            <div className="register-signIn">
                <NavLink to='/signIn'>
                    <p>Log-In</p>
                </NavLink>

                <NavLink to='/signUp' className='register'>
                    <p>Register</p>
                </NavLink>
            </div>

        </StyledNavbar>
    )
}

export default Navbar