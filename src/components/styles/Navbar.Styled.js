import styled from "styled-components";

export const StyledNavbar = styled.nav`
    padding-top: .8rem ;
    padding-bottom: .8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px 0px; 
    
    img{
        width: 32px;
        margin-right: .85rem;
    }
    
    a{
        text-decoration: none;
        color: #3e3e3e;
    }
    .nav-links a{
        text-decoration: none;
        color: grey;
        font-size: 1.05rem;
    }

    .logo-container{
        align-items: center;
        display: flex;
    }

    .logo-container h2{
        font-size: 1.2rem;
    }

    .logo-container span{
        color: #3a5cee;
    }
    
    .main-links{
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }

    .nav-links{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
        
    }
    .nav-links .active{
        color: #3a5cee;
    }

    .nav-links a:hover{
        color: #3a5cee;
        transition: all .1s ease-in;
    }
    .register-signIn{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .register-signIn > a{
        background-color: #eee;
        padding: .6rem 1.2rem;
        border-radius:5px;
        p{
            font-size: 1rem !important;
        }
    }
    
    .register{
        background-color: #3a5cee !important;
        color: white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .register:hover{
        background-color: #263c9b !important;
        transition: all .1s ease-in;
    }
    .profile-img{
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .profile-img img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
        margin: 0;
    }

    .hamburger-div{
        cursor: pointer;
        display: none;
    }

    @media(max-width:1100px){
        img{
            width: 30px;
            margin-right: .65rem;
        }
        .logo-container h2{
            font-size: 1.3rem;
        }
        .nav-links{
            font-size: .98rem;
        }

        .register-signIn > a{
            font-size: .98rem;
            padding: .7rem 1.2rem;
        }
    }

    @media(max-width:900px){
        justify-content: space-between;
        .logo-link{
            margin: 0 auto;
        }
        .logo-container{
        
            h2{
                font-size: 1.2rem;
            }
        }
        .main-links{
            position: absolute;
            background-color: white;
            flex-direction: column;
            top: 77.6px;
            min-height: calc(100% - 80px);
            height: 100vh;
            width: 100%;
            z-index: 100;
            left: -100%;
            padding-top: 5rem;
            gap: 4rem;
            transition: all .2s ease-in-out;
        }
        .show-menu{
            left: -0%;
        }
        .register-signIn > a:nth-child(1){
            display: none;
        }

        .hamburger-div{
            display: block;
            width: 25px;
        }
    } 
    @media(max-width:650px) {
        padding-top: .5rem;
        padding-bottom: .5rem;
        .logo-container{
            h2{
                font-size: 1rem;
            }
            img{
                width: 25px;
                margin-right: .4rem;
            }
            
        }

        .register{
            font-size: .8rem !important;
            padding: .5rem .9rem !important;
        }

        .hamburger-div{
            width: 22px;
            
        }
    }
    @media(max-width:550px) {
        .register{
            padding: .4rem .85rem !important ;
        }
        .register-signIn > a{
            p{
                font-size: .8rem !important;
            }
        }
        .profile-img img{
            width: 40px;
            height: 40px;
        }
    }

    @media(max-width:400px){

        .hamburger-div{
            width: 18px;
        }

        .register{
            padding: .38rem .8rem !important;
        }

        .register-signIn > a{
            p{
                font-size: .7rem !important;
            }
        }
    }
`