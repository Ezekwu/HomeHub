import styled from "styled-components";
export const StyledListing = styled.div`
color: #3c3c3c;
padding-top: 2rem;
padding-bottom: 2rem;
    .main{
        justify-content: space-between;
        margin-bottom: 4rem;
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

    
    .house-assets h2{
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
    /////////////////////////////////////


    .swiper{
    height: 70vh;
    border-radius: 5px;
    margin-bottom: 2rem;
    width:62% ;
    margin: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 12px 29px 5px;}

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