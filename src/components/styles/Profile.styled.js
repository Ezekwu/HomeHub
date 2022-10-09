import styled from "styled-components";

export const StyledProfile = styled.div`
        padding-top: 2rem ;
        padding-bottom: 2rem;
        color: #061f48;

        h2{
            font-weight: 400;
            text-align: center;
            margin-bottom: 4rem;
        }
        
        h2 span{
            color: #3a5cee;
        }
        .spinner-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 20px;
            }
        }

        
        .main{
            display: flex;
            gap: 4rem;
        }

        button{
            border: none;
            outline: none;
            padding: .8rem 1.7rem;
            font-size: 1rem;
            border-radius: 5px;
            color: white;
            background-color: #3a5cee;
            cursor: pointer;
            margin-top: 2rem;
        }
        button:disabled{
            opacity: .7;
        }
        button:disabled:hover{
            background-color: #3a5cee;
        }

        button:hover{
        background-color: #263c9b;
        transition: all .2s ease-in;
        }

        a{
            color: #3c3c3c;
            text-decoration: none;
            transition: all .5s ease-in;
        }

        a:hover{
            text-decoration: underline;
            
        }
        .profile-container{
            display: flex;
            gap: 1rem;
        }
        .col-left{
            width: 50%;
        }
    
        .profile-pic-container{
            text-align: center;
            width: 100%;
            box-shadow: 0px 2px 12px #d0d0d0a6;
            border: 1px solid #d0d0d09e;
            padding: 2rem 1rem 3rem;
            border-radius: 5px;
            align-self: flex-start;
            margin-bottom: 2rem;

        }
        .profile-pic-container label{
            border: none;
            outline: none;
            padding: .8rem 1.7rem;
            font-size: 1rem;
            border-radius: 5px;
            color: white;
            background-color: #3a5cee;
            cursor: pointer;
            
        }

        .profile-pic-container label:hover{
            background-color: #263c9b;
            transition: all .2s ease-in;
        }

        .profile-pic-container img{
            object-fit: cover;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-bottom: .5rem;
        }

        
        input[type='file']{
            display: none;
        }
        .joined{
            color: grey;
            font-weight: 200;
            font-size: .9rem;
            margin-bottom: 2rem;
        }
        .profile-name{
            font-size: 1.5rem;
            margin-bottom: .5rem;
        }
        .create-listing{
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            
        }

        .create-listing i{
            display: none;
        }
        
        .create-listing:hover{
            i{
                display: block;
            }
        }
        

        .profile-details{
            width: 100%;
        }
        label{
        margin-bottom: .5rem;
    }
        input, textarea {
            padding: .8rem 1.7rem;
            border-radius: 5px;
            border: none;
            outline: 1px solid #d0d0d0;
        }
        input:focus{
        outline: 1px solid #3a5cee;
        transition: all .2s ease-in;
        }
        .col-1{
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
            gap: 1rem;
        }

        .col-1 > div{
            width: 100%;
        } 
        form  .bio, .name, .email{
            display: flex;
            flex-direction: column;
        }

        textarea {
            resize: vertical;
        }

        textarea:focus{
        outline: 1px solid #3a5cee;
        transition: all .2s ease-in;
        }
        
        .save-btn{
            margin-right: auto;
        }
        .your-listings{
            margin: 4rem 0;
            & > h3{
                font-weight: 400;
                margin-bottom: 3rem;
                text-align: center;
            }

        }
        .listings-container{
            display: flex;
            gap: 1rem;
            overflow-x: scroll;
            overscroll-behavior-inline: contain;
            scroll-snap-type: x mandatory;
            scroll-padding-inline: 1rem;

            & >div{
                min-width: 320px;
                scroll-snap-align: start;
                
                
            }
        }

        .log-out{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .7rem;
        }

        @media(max-width: 1100px) {
            & > div{
                gap: 2rem;
            }
        }

        @media(max-width: 950px) {
            & > div{
                flex-direction: column;
                gap: 4rem;
            }

            .col-left{
                width: 100%;
            }
        }

        @media(max-width:650px) {
            .col-1{
                flex-direction: column;
                gap: 2rem;
            }
            .profile-pic-container img{
                width: 150px;
                height: 150px;
            }

            .listings-container{
            display: flex;
            gap: 1rem;
            overflow-x: scroll;

            & >div{
                min-width: 320px;
                
                img{
                    border: 1px solid red;
                    height: 170px;
                }

                .details{
                    padding:.5rem 1rem 1rem;

                    .name {
                        font-size: .95rem;
                        margin-bottom: .3rem;
                    }

                    .address{
                        font-size: .8rem;
                        margin-bottom: .5rem;
                    }

                    .rooms{
                        margin-bottom: 0.9rem;
                        span{
                            font-size: .8rem;
                        }
                    }

                    .price-view  {
                        margin-bottom: 1rem;
                        h3{
                            font-size: 1rem;

                        }

                        .main-link{
                            font-size: .75rem;
                            padding: .4rem .8rem;
                        }
                    }

                    .edit{
                        font-size: .75rem;
                        margin-top: 0rem;
                        padding: .4rem .8rem;
                    }

                    .delete{
                        font-size: .75rem;
                        margin-top: 0rem;
                        padding: .4rem .8rem;
                    }
                }
            }
        }
        }

        @media(max-width:450px) {
            .listings-container{
                &>div{
                    min-width: 300px;
                }
            }
        }

        @media(max-width:380px) {
            .listings-container{
                
                &>div{
                    min-width: 290px;
                }
            }
        }

        @media(max-width:350px) {
            .listings-container{
                &>div{
                    min-width: 265px;
                }
            }
        }
`