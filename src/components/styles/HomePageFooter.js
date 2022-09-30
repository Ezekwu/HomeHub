import styled from "styled-components";

export const StyledHomePageFooter = styled.footer`
text-align: center;
color: white;
background-color: #061f48;
padding: 3rem 0;

h2{
    font-weight: 400;
    margin-bottom: .5rem;
}

p{
    font-weight: 300;
    color: #bfbfbf;
    font-size: .9rem;
}
.news-letter{
    p{
        margin-bottom: 2rem;
    }
}
form{
    margin-bottom: 3rem;

    .input-container{
        max-width: 389px;
        border-radius: 5px;
        margin: 0 auto;
        padding: .4rem;
        background-color: #ffffff1a;
        input{
            padding: .5rem 4rem;
            background: transparent;
            border: none;
            outline: none;
            color: white;
            
        }

        button{
            padding: .8rem 1rem;
            color: white;
            background-color: #3a5cee;
            text-decoration: none;
            border: none;
            outline: none;
            border-radius: 5px;
            transition: all .2s ease-in;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            
        }
    }
}
hr{
    border: 1px solid #ffffff1a;
}

.footer-main{
    display: flex;
    gap: 8rem;
    flex-basis: 50%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    text-align: left;
    .logo-desc{
        width: 80%;

        .social-links{
            display: flex;
            gap: .3rem;
            color: #bfbfbf;

            div{
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: #ffffff1a;

            }

        }
    }

    .links{
        width: 100%;
        display: flex;
        justify-content: space-between;

        h4{
            font-weight: 400;
            margin-bottom: .8rem;
        }
        p{
            cursor: pointer;
            margin-bottom: .5rem;
        }

        p:hover{
            color: #3a5cee;
            transition: all .2s ease-in;
        }
    }
}

.logo-desc{
    .logo-container{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        img{
            width: 30px;
            margin-right: .5rem;
            
        }
        h2{
            font-size: 1.3rem;
            margin-top: .3rem;

            span{
                color: #6784ff;
            }
        }
        
    }
    p{
        margin-bottom: 1rem;
    }
}
`
