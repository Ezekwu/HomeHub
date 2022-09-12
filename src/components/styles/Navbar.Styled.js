import styled from "styled-components";

export const StyledNavbar = styled.nav`
    padding: 2rem 4.5rem;
    justify-content: space-between;
    align-items: center;
    display: flex;

    
    img{
        width: 36px;
        margin-right: .85rem;
    }

    a{
        text-decoration: none;
        color: grey;
    }

    .logo-container{
        align-items: center;
        display: flex;
    }

    .logo-container h2{
        font-size: 1.5rem;
    }

    .logo-container span{
        color: #3a5cee;
    }

    .nav-links{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3.5rem;
        font-size: 1.1rem;
    }

    .nav-links a:hover{
        color: #3a5cee;
        transition: all .1s ease-in;
    }

    .register-signIn{
        display: flex;
        align-items: center;
        gap: 3.5rem;
    }
    .register-signIn > a{
        background-color: #eee;
        padding: .9rem 1.4rem;
        border-radius:5px;
    }
    
    .register{
        background-color: #3a5cee !important;
        color: white;
    }
    .register:hover{
        background-color: #263c9b !important;
        transition: all .1s ease-in;
    }
`