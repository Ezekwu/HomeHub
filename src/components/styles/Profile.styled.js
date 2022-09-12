import styled from "styled-components";

export const StyledProfile = styled.div`
        padding: 2rem 5rem;
        color: #3c3c3c;
        

        
        & > div{
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
            margin-top: 1.2rem;
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
            background-color: #eee;
            padding: .9rem 1.4rem;
            border-radius:5px;
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
`