import styled from "styled-components";

export const StyledHomePage = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: #061f48;
    overflow: hidden;

    main{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        height: 80vh;
        border-radius: 20px;
        
        h1{
            width:80% ;
            margin: 0 auto 1.2rem;
            font-size: 2.5rem;
            span{
                color: #3a5cee;
            }
        }

        p{
            font-size: 1.2rem;
            margin-bottom: 4rem;
        }

        a{
            color: #3c3c3c;
            background-color: #eee;
            text-decoration: none;
            
            padding: .9rem 1.4rem;
            border-radius: 5px;
            transition: all .2s ease-in;
        }
        a:hover{
            color: white;
            background-color: #3a5cee
        }
    }

    .companies{
        padding: 4rem 0 1rem;
        text-align: center;
        border-bottom: 1px solid #dbdbdb;

        h4{
            font-size: 1.3rem;
            margin-bottom: 1rem;
            font-weight: 500;
            
            span{
                color: #3a5cee;
            }
        }

        .imgs-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
        
            width: 70%;
            margin: 0 auto;
            .google{
                width: 100px;
            }

            .amazon{
                width: 100px;

            }

            .booking{
                width: 135px;
            }

            .airbnb{
                width: 60px;
            }

            .microsoft{
                width: 110px;
            }
        }
    }

.what-we-do{
    display: flex;
    align-items: center;
    gap: 4rem;
    flex-basis: 50%;
    padding: 4rem 0;

    .col-left{
        width: 100%;
        

        h2{
            margin-bottom: 4rem;
            font-size: 1.6rem;
            font-weight: 400;

            span{
                color: #3a5cee;
            }
        }
        .row{
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 3rem;

            .details{
                h3{
                    margin-bottom: .5rem;
                    font-weight: 400;
                }
                p{
                    font-weight: 300;
                    color: #7b7b7b;
                }
            }
        }

        .icon-div{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.2rem;
            /* width: 60px;
            height: 60px; */
            background-color: #3a5cee1f;
            border-radius: 50%;

            img{
                width: 25px;
                height: 25px;
                
            }

            .payment{
                width: 27px;
            }
            .insurance{
                width: 35px;
            }
        }
    }

    .col-right{
        width: 100%;
        
        img{
            border-radius: 5px;
        }

    }
}

.make-listing{
    display: flex;
    align-items: center;
    flex-basis: 50%;
    padding: 4rem 0;
    gap: 4rem;
    .col-left{
        width: 100%;
        img{
            border-radius: 5px;
        }
    }

    .col-right{
        width: 100%;
        
        h2{
            font-weight: 400;
            margin-bottom: 1rem;
        }

        p{
            font-weight: 300;
            color: #7b7b7b;
        }

        .listing-steps{
            margin-top: 4rem;
            margin-bottom: 4rem;
            display: flex;
            gap: 1rem;
            

            .card{
                width: 100%;
                background-color: #3a5cee1f;
                padding:  4rem 1.2rem  3rem;
                border-radius: 8px;

                div{
                    margin-bottom: 1rem;
                    padding: .5rem;
                    background-color: white;
                    border-radius: 8px;
                    text-align: center;
                    width: 35px;
                    color: #061f48;
                    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
                }

                h3{
                    font-weight: 300;
                    font-size: 1.09rem;
                    color: #3a5cee;
                }
            }

            
        }

        a{
            color: white;
            background-color: #3a5cee;
            text-decoration: none;
            padding: .9rem 1.4rem;
            border-radius: 5px;
            transition: all .2s ease-in;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            margin-top: auto;
        }

        a:hover{
            background-color: #263c9b !important;
            transition: all .1s ease-in;
        }
    }
}

.popular-listings{
    padding-top: 2rem;
    padding-bottom: 4rem;
    h2{
        text-align: center;
        margin-bottom: 1.7rem;
        font-weight: 400;
    }
    &>p{
        text-align: center;
        margin-bottom: 4rem;
        font-weight: 300;
        color: #7b7b7b;
    }

    &>a{
        color: #3a5cee;
        text-decoration: none;
    }

    &>a:hover{
        text-decoration: underline;
    }

    .listings-container{
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        margin-bottom: 3rem;
        

        &>div{
            
            img{
                height: 250px;
            }
        }

    }
}

.register{
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 4rem 0;
    flex-basis: 50%;
    
    .col-1{
        width: 100%;
        h2{
            font-weight: 400;
            margin-bottom: 1rem;
        }

        p{
            font-weight: 300;
            color: #7b7b7b;
        }
        
        &>p{
            margin-bottom: 3rem;
        }

        a{
            color: white;
            background-color: #3a5cee;
            text-decoration: none;
            padding: .9rem 1.4rem;
            border-radius: 5px;
            transition: all .2s ease-in;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            
        }

        a:hover{
            background-color: #263c9b !important;
            transition: all .1s ease-in;
        }
        .features{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 5rem;
            .feature-container{
                display: flex;
                align-items: center;
                gap: 1rem;
                

                .tick-icon{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #3a5cee1f;
                    padding: .4rem;
                    border-radius: 5px;
                    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
                    

                    i{
                        color: #3a5cee;
                        font-size: .9rem;
                    }
                }
            }
        }
    }


    .col-2{
        width: 100%;
        img{
            border-radius: 5px;
        }
    }
}

//media queries

@media(max-width:1200px) {
    main{
        height: 50vh;
        h1{
            font-size: 2.3rem;
        }
        p{
            font-size: 1.2rem;
        }
    }
    
    .companies{
        .imgs-container{
            width: 80%;
        }
    }

    .what-we-do{
        gap: 2rem;

        .col-left{

            .row{
                gap: 1.5rem;

                


            }
        }
    }

    .popular-listings{
        .listings-container{
            gap: .8rem;
        }
    }

    .make-listing {
        gap: 2rem;
        

        .listing-steps{
            margin-top: 1rem !important;
            margin-bottom: 2rem !important;
        }
    }
    
    .register{
        gap: 2rem;
        .col-1{
            p{
                margin-bottom: 1rem;
            }

            .features{
                margin-bottom: 2rem;
                grid-template-columns: 1rem;
                
            }
        }
    }
    
}

@media(max-width:900px) {
    main{
        height: 50vh;
        h1{
            font-size: 2rem;
        }
        p{
            font-size: 1rem;
        }
        a{
            padding: .7rem 1.2rem;
        }
    }

    .companies{
        .imgs-container{
            width: 100%;
            .google{
                width: 80px;
            }

            .amazon{
                width: 60px;

            }

            .booking{
                width: 100px;
            }

            .airbnb{
                width: 40px;
            }

            .microsoft{
                width: 90px;
            }
        }
    }

    .what-we-do{
        gap: 2rem;
        flex-direction: column;
        
        h2{
            text-align: center;
        }
        .col-left{

            .row{
                gap: 1.5rem;

                .insurance{
                    width: 27px; 
                }
            }
        }
    }

    .popular-listings{
        .listings-container{
            grid-template-columns: 1fr;
        }
    }
    .make-listing {
        gap: 4rem;
        flex-direction: column-reverse;

        .listing-steps{
            margin-top: 2rem !important;
            margin-bottom: 2rem !important;
        }
    }

    .register{
        flex-direction: column;
        gap: 4rem;
    }
}

@media(max-width:650px) {
    main{
        height: 50vh;
        border-radius: 5px;
        h1{
            font-size: 1.7rem;
            margin-bottom: .7rem;
        }
        p{
            font-size: .9rem;
            margin-bottom: 1.2rem;
        }
        a{
            font-size: .8rem ;
            padding: .6rem 1rem ;
        }
    }
    .companies{
        h4{
            font-size: 1.1rem;
        }
        .imgs-container{
            width: 100%;
            .google{
                width: 70px;
            }

            .amazon{
                width: 50px;

            }

            .booking{
                width: 90px;
            }

            .airbnb{
                width: 30px;
            }

            .microsoft{
                width: 70px;
            }
        }
    }

    .what-we-do{
        
        
        
        .col-left{
            h2{
                font-size: 1.4rem;
            }
            .row{
                gap: 1.5rem;

                .insurance{
                    width: 27px; 
                }
            }
        }
    }
    .popular-listings{
        h2{
            font-size: 1.4rem;
        }

        p{
            font-size: .9rem;
        }
        .listings-container{
            grid-template-columns: 1fr;
        }
        
    }
    .make-listing {

        h2{
            font-size: 1.4rem;
        }

        p{
            font-size: .9rem;
        }

    }
    .register{
        h2{
            font-size: 1.4rem;
        }

        p{
            font-size: .9rem;
        }
    }
    
}
@media(max-width:500px){
    main{
        
        h1{
            font-size: 1.4rem;
            margin-bottom: .5rem;
            width: 100%;
        }
        p{
            font-size: .9rem;
            margin-bottom: 1.2rem;
            line-height: 1rem;
        }
        a{
            font-size: .8rem ;
            padding: .6rem 1rem ;
        }
    }
    .companies{
        h4{
            font-size: 1rem;
        }
        .imgs-container{
            .google{
                width: 50px;
            }

            .amazon{
                width: 40px;

            }

            .booking{
                width: 70px;
            }

            .airbnb{
                width: 20px;
            }

            .microsoft{
                width: 50px;
            }
        }
    }

    .what-we-do{
        
        
        
        .col-left{
            h2{
                font-size: 1.4rem;
                margin-bottom: 2.5rem;
            }
            .row{
                gap: 1rem;
                
                h3{
                    font-size: 1.1rem;
                    margin-bottom: .4rem;
                }
                p{
                    font-size: .9rem;
                }

                .icon-div{
                    padding: .8rem;
                }
                .payment{
                    width: 37px;
                }
                .insurance{
                    width: 45px; 
                }
                .Affordable{
                    width: 35px;
                }
            }
        }
    }

    .make-listing{
        .listing-steps{
            flex-direction: column;
        }
    }
    .register{
        a{
            font-size: .8rem ;
            padding: .6rem 1rem ;
        }

        .features{
            gap: 1rem;
        }
    }
}
`