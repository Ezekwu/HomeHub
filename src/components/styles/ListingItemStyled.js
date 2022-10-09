import styled from "styled-components";
export const StyledListingItem = styled.div`
color: #061f48;
max-width: 100%;
height: auto;
margin-bottom: 0rem;
border-radius: 6px;
border: 1px solid #8080801f;

.main-link{
    text-decoration: none;
    padding: .4rem 1rem;
    font-size: .9rem;
    border-radius: 5px;
    color: white;
    background-color: #3a5cee;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
}

.main-link:hover{
    background-color: #263c9b !important;
    transition: all .1s ease-in;
}

.img-container{
    padding: .5rem;
    width: 100%;
}

img{
    border-radius: 8px;
    width: 100%;
    height: 190px;
    object-fit: cover;
    
}

.details{
    padding: 1rem;

    .name{
        font-weight: 400;
        font-size: 1.1rem;
        margin-bottom: .5rem;
    }
    .address{
        color: #3c3c3c9e;
        font-size: .9rem;
        margin-bottom: .8rem;

        i{
            color: #ff1800d6;
            margin-right: .5rem;
        }
    }
}

.price-view{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3{
        font-weight: 400;
        color: #3a5cee;

        p{
            color: #3c3c3c9e;
            font-size: 1rem;
            margin-left: .3rem;
            display: inline;
        }
    }
}
.rooms{
    display: flex;
    gap: .7rem;
    margin-bottom: 1.2rem;
    span{
        font-size: .9rem;
        color: #3c3c3c9e;

        i{
            color: #061f48;
        }
    }
}


.delete-edit{
    display: flex;
    justify-content: space-between;

    button{
        padding: .4rem 1rem;
        font-size: .9rem;
        border-radius: 5px;
        color: white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        
    }
    .delete{
            background-color: #d91717e8;

        }
}

`