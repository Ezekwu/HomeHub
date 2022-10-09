import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './components/styles/GlobalStyles';
import Navbar from './components/layout/Navbar';
import Hommepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import Listings from './pages/Listings';
import EditListings from './pages/EditListings';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path='/' element={<Hommepage />}/>
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/listings' element={<Listings />} />
          <Route path='/editListings/:lidtingId' element={<EditListings />} />
          <Route path='/createListing' element={<CreateListing />} />
          <Route path='/category/:categoryName/:listingId' element={<Listing />} />
          <Route path='/profile' element={<PrivateRoute />} >
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/contact/:landlordId/' element={<Contact />} />

        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
