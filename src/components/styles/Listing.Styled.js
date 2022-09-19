import styled from "styled-components";
export const StyledListing = styled.div`
color: #3c3c3c;
padding-top: 2rem;
padding-bottom: 2rem;
    .main{
        justify-content: space-between;
        margin-bottom: 6rem;
    }

    .flex{
        display: flex;
        align-items: center;
    }

    .location{
        gap: 6px;
    }

    .location i{
        font-size: .9rem;
        color: #ff1800d6;
    }
    .name{
        font-size: 1.7rem;
        margin-bottom: 1rem;
    }

    

    .discount-type{
    gap: 10px;
    margin: .8rem 0;
}
    .tag{
        padding: .5rem;
        background-color: green;
        font-size: .85rem;
        min-width: 60px;
        text-align: center;
        border-radius: 5px;
        color: #3a5cee;
        font-weight: 300;
        background-color: #3a5cee1f;    
    }

    .rooms{
        margin-bottom: 1rem;
    }

    .price{
        gap: 10px;
    }

    .regular-price{
        font-size: 1.5rem;
        color: #3a5cee;
    }
    
    .discount-price{
        font-size: 1.2rem;
        text-decoration: line-through;
        color: #3c3c3c87;
    }

    .assets_map{
        display: flex;
        align-items: center;
        gap: 5rem;
    }

    .house-assets{
        margin-bottom: 3rem;
    }

    .house-assets h2{
        font-size: 1.7rem;
        font-weight: 400;
        margin-bottom: 1.7rem;
    }
    .house-assets span{
    color: #3a5cee;
    }

    .assets-container {
        display: flex;
        align-items: center;
        gap: 5rem;
    }

    .house-assets .row{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .house-assets .row i{
        margin-right: 1rem;
    }

    .map-container h2{
        font-weight: 400;
        margin-bottom: 1rem;
    }

    .map-container h2 span{
        color: #3a5cee;
    }
    .leafletContainer {
    width: 100%;
    height: 500px;
    overflow-x: hidden;
    margin: 3rem 0;
    border-radius: 5px;
    box-shadow: 0px 0px 8px  rgba(0, 0, 0, 0.2);
}
.main-map-container{
    width: 100%;
    height: 100%;
}
.landlord{
    width: 40%;
    margin-bottom: 3rem;
}

.landlord .row-1{
    display: flex;
    gap: 1rem;
    margin-bottom: .6rem;
}

.landlord .landlord-description h2{
    font-weight: 400;
    font-size: 1.25rem;
}

.landlord .landlord-img img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
}

.contact-btn{
    background-color: #3a5cee;
    color: white;
    padding: .9rem 1.4rem;
    border-radius:5px;
    text-decoration: none;
    

}

.contact-btn:hover{
    background-color: #263c9b ;
    transition: all .2s ease-in;
}

@media(max-width:1200px){
    .main{
        flex-direction: column-reverse;
        gap: 4rem;
        margin-bottom: 3rem;
    }

    .listing-details{
        width: 100%;
    }

    .leafletContainer{
        height: 400px;
    }
}

@media(max-width:900px) {
    .landlord{
        width: 60%;
    }
}

@media(max-width:600px){
    .main{
        margin-bottom: 3rem;
    }
    .name{
        font-size: 1.5rem;
    }
    
    .regular-price{
        font-size: 1.3rem;
    }
    .discount-price{
        font-size: 1rem;
    }

    .house-assets h2{
        font-size: 1.5rem;
    }

    .assets-container{
        gap: 3rem;
    }

    .leafletContainer{
        height: 300px;
    }
    .landlord{
        width: 70%;
    }
}

@media(max-width:500px) {
    .leafletContainer{
        height: 250px;
    }

    .landlord{
        width: 100%;
    }

    .landlord .landlord-description h2{
        font-size: 1.1rem;
    }
}
    /////////////////////////////////////


    .swiper{
    height: 70vh;
    border-radius: 5px;
    margin-bottom: 2rem;
    width:62% ;
    margin: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 12px 29px 5px;}

    @media(max-width:1200px) {
    .swiper{
        height: 60vh;
        width: 100%;
    }
}

    @media(max-width:800px) {
    .swiper{
        height: 40vh;
        width: 100%;
    }
}

@media(max-width:500px){
    .swiper{
        height: 30vh;
        width: 100%;
    }
}

.swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper_nav-next,
.swiper_nav-prev{
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
    width: 80px;
    height: 80px;
    z-index: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper_nav-next img,
.swiper_nav-prev img{
    width: 25px;
    height: 25px;
}



.swiper_nav-prev{
    left: 0;
}

.swiper_nav-next{
    right: 0;
}


.swiper-next{
    right: 0;
    background-image: url('../../assets/next(1).png');
}

.swiper-pagination-bullet-active{
    background: white !important;
}



    
`