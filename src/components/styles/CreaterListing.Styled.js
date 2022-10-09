import styled from "styled-components";

export const StyledCreateListing = styled.div`
padding-top: 2rem;
padding-bottom: 4rem;
color: #061f48;
    
    i{
        margin-left: 5px;
    }
    .heading{
        text-align: center;
        margin-bottom: 1.5rem;
    }
    

    .heading h1 span{
        color: #3a5cee;
    }

    .info{
        text-align: center;
        margin-bottom: 2.5rem;
    }
    
    form{
        width: 80%;
        margin: 0 auto;
    }

    label{
        margin-bottom: .85rem;
        
    }
    input, textarea{
        padding: .8rem 1.7rem;
        width: 100%;
        border-radius: 5px;
        border: none;
        outline: 1px solid #d0d0d0;
    }
    textarea {
            resize: vertical;
    }

    textarea:focus{
    outline: 1px solid #3a5cee;
    transition: all .2s ease-in;
    }
    input[type='file']::-webkit-file-upload-button{
        background-color: red;
    }

    ::-webkit-file-upload-button {
        background-color: red;

    }
    button  {
        border: none;
        outline: none;
        background-color: #3a5cee;
        color: white;
        width: 100%;
        padding: .8rem 1.7rem;
        font-size: 1rem;
        border-radius: 5px;
        transition: all .15s ease-in;
        cursor: pointer;
    } 

    .create-listing:hover{
        background-color: #263c9b !important;
        transition: all .1s ease-in;
    }

    
    .button-false{
        background-color: #f6f6f6;
        color: #3c3c3c;
    }
    input:focus{
        outline: 1px solid #3a5cee;
        transition: all .2s ease-in;
    }
    .row {
        display: flex;
        gap: 4rem;
        width: 100%;
        margin-bottom: 2.5rem;
    }
    .row > div{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .flex{
        display: flex;
        gap: 2rem;
    }
    .regularPrice p{
        width: 10%;
        align-self: center;
    }
    .location{
        flex-direction: row !important;
    }
    .location input{
        margin-top: .85rem;
    }

@media(max-width:800px) {
    .row {
        flex-direction: column;
        gap: 2.5rem;
    }
}

@media(max-width:600px){
    form{
        width: 100%;
    }
    .heading h1{
        font-size: 1.8rem;
    }
}
`