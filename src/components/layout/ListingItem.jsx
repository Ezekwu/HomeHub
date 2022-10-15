import { Link } from 'react-router-dom'
import { StyledListingItem } from "../styles/ListingItemStyled"


const ListingItem = ({listingData, listingId, onDelete, onEdit }) => {

    return (
        <StyledListingItem>
                        <Link to={`/category/${listingData.type}/${listingId}`} >
                            <div className="img-container">
                                <img src={listingData.imgUrls[0]} alt="" />
                            </div>
                        </Link>
                        
                    
                <div className="details">
                    <h3 className="name">{listingData.name}</h3>
                    <p className="address"><i className="fa-solid fa-location-dot"></i>{listingData.address} </p>
                    <div className="rooms">
                        <span><i className="fa-solid fa-bed"></i> {listingData.bedrooms} bedrooms</span>
                        <span><i className="fa-solid fa-bath"></i> {listingData.bathrooms} bathrooms</span>
                    </div>
                    <div className="price-view">
                        <h3 className="price">${listingData.offer ? listingData.discountedPrice.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') : listingData.regularPrice.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        {listingData.type === 'rent' && <p>/month</p>}
                        </h3>
                        <Link to={`/category/${listingData.type}/${listingId}`} className='main-link'>
                            view
                        </Link>
                    </div>
                    <div className="delete-edit">
                        {
                            onDelete && <button onClick={onDelete} className='delete'>delete</button>
                        }

                        {
                            onEdit && <button onClick={onEdit}  className='edit'>Edit</button>
                        }
                    </div>
                </div>
        </StyledListingItem>
    )
}

export default ListingItem