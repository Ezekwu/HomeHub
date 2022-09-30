import styled from "styled-components";
export const StyledContact = styled.div`
color: #061f48;
text-align: center;
padding-top: 2rem;
padding-bottom: 2rem;
h2{
    font-weight: 400;
    font-size: 1.7rem;
    margin-bottom: 1rem;
}
h2 span{
    color: #3a5cee;
}
form{
    width: 100%;
    
}

p{
    margin-bottom: 3rem;
}



textarea{
    width: 100%;
    height: 350px;
    padding: .8rem 1.7rem;
    border-radius: 5px;
    border: none;
    outline: 1px solid #d0d0d0;
    margin-bottom: 2rem;
}

textarea {
    resize: vertical;
}

textarea:focus{
        outline: 1px solid #3a5cee;
        transition: all .2s ease-in;
        }

main p{
    font-size: 1.1rem;
}

button{
    border: none;
    outline: none;
    background-color: #eee;
    padding: .9rem 1.4rem;
    border-radius:5px;
    background-color: #3a5cee !important;
    color: white;
    cursor: pointer;
    font-size: 1rems;
}

button:hover{
    background-color: #263c9b !important;
    transition: all .1s ease-in;
}
`
