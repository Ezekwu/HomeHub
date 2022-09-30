import styled from "styled-components";
export const StyledSignUp = styled.div`
    display: flex;
    
    padding: 2rem 4rem ;
    color: #061f48;

    p{
        color: grey;
        

    }

    .image-container {
        position: relative;
        width: 80%;
        flex-grow:0 ;
        
    }
    
    .image-container > img{
        width: 100%;
        height: 620px;
        border-radius: 10px;
        object-fit: cover;
    }

    .image-text{
        position: absolute;
        bottom: 20%;
        left: 0%;
        right: 0%;
        padding: 3rem;
        border-radius: 5px;
        width: 90%;
        font-size: 1.7rem;
        background-color: #c4c4c45e;
        backdrop-filter: blur(4px);
        color: white;
    }
    .form-container{
        width: 100%;
        display: flex;
        
        justify-content: center;
    } 

    .form-container > div > p{
        margin-bottom: 2.8rem;
    }
    .form-container > div{
        margin-top: 10%;
        width: 80%;
    }
    .form-container h2{
        font-size: 2rem;
        margin-bottom: .9rem;
    }
    form{
        margin-bottom: 2rem;
    }
    form > div{
        display: flex;
        flex-direction: column;
        margin-bottom: 1.2rem;
    }

    label{
        margin-bottom: .5rem;
    }
    input{
        padding: .8rem 1.7rem;
        width: 80%;
        border-radius: 5px;
        border: none;
        outline: 1px solid #d0d0d0;
    }

    input:focus{
        outline: 1px solid #3a5cee;
        transition: all .2s ease-in;
    }
    button{
        border: none;
        outline: none;
        background-color: #3a5cee;
        color: white;
        width: 80%;
        padding: .8rem 1.7rem;
        font-size: 1rem;
        border-radius: 5px;
        margin-top: .5rem;
        cursor: pointer;
}

    button:hover{
        background-color: #263c9b;
        transition: all .2s ease-in;
    }
    hr{
        color:#ffffff87;
        
    }
    .or-container{
        width: 80%;
        
    }
    .or-container > div{
        margin: -2.5% auto 0;
        flex-grow: 0;
        background-color:white;
        padding: 0 25px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        }
        .signIn{
            margin-top: 2rem;
        }

        .signIn a{
            color: #3a5cee;
            text-decoration: none;
        }
        .signIn a:hover{
            text-decoration: underline;
        }

        /* Media queries */

        @media(max-width:1000px) {
            .image-text{
                padding: 2rem;
                font-size: 1.5rem;
            }
        }
        @media(max-width:900px){

            input{
                width: 100%;
            }

            button{
                width: 100%;
            }
            .image-container {
                width: 100%;
            }

            .or-container{
                width: 100%;
            }
        }
        @media(max-width:800px){
            .image-container {
                display: none;
            }

            @media(max-width:600px){
                padding: 2rem ;
                .form-container > div{
                    width: 100%;
                }
            }


}
`