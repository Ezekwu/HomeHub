import { StyledHomePageFooter } from "../styles/HomePageFooter"
import logo from '../../assets/camera-flash-selected-svgrepo-com.svg'
const HomePageFooter = () => {
    const date = new Date().getFullYear()
    
    return (
        <StyledHomePageFooter>
            <div className="news-letter container">
                <h2>Newsletter</h2>
                <p>Be the first to know about discounts, events, latest listings weekly in your mail-box. <br /> You can unsuscribe anytime you want with just one click</p>
                <form >
                    <div className="input-container">
                        <input type="text" placeholder="Enter your email"/>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <hr />
            <div className="footer-main container">
                <div className="logo-desc">
                    <div className="logo-container">
                        <img src={logo} alt="" />
                        <h2>Home<span>Hub</span></h2>
                    </div>
                    <p>HomeHub makes finding your dream home faster by providing you with varieties of options. Our properties are standard , most have a discount and are insured. We also make it possible for you to host your property up for sale or rent </p>
                    <div className="social-links">
                    <div><i class="fa-brands fa-facebook-f"></i></div>
                    <div><i class="fa-brands fa-instagram"></i></div>
                    <div><i class="fa-brands fa-twitter"></i></div>
                    </div>
                </div>

                <div className="links">
                    <div className="col">
                        <h4>About</h4>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Jobs</p>
                        <p>In Press</p>
                    </div>

                    <div className="col">
                        <h4>Support</h4>
                        <p>Contact us</p>
                        <p>Online Chat</p>
                        <p>Whatsapp</p>
                        <p>Telegram</p>
                        <p>Ticketing</p>
                    </div>

                    <div className="col">
                        <h4>FAQ</h4>
                        <p>Account</p>
                        <p>Manage Deliveries</p>
                        <p>Bookings</p>
                        <p>Payment</p>
                        <p>Booking Cancelation</p>
                    </div>
                </div>
            </div>

            <div className="copy-right">
                <p>&copy; {date} All Rights Reserved</p>
            </div>
        </StyledHomePageFooter>
    )
}

export default HomePageFooter