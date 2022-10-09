import styled from "styled-components";

export const StyledListings = styled.section`
padding-top: 3rem;
padding-bottom: 4rem;
transition: all .3s ease-in-out;

h2{
    text-align: center;
    font-weight: 400;
    color: #061f48;
    margin-bottom: .5rem;
    
    span{
        color: #3a5cee;
    }
}
&>p{
    text-align: center;
    margin-bottom: 3rem;

}
.label{
    display:flex;
    gap: .5rem;
    

    label{
    display: block;
    margin-bottom: 1rem;
    font-weight: 300;
    
    }

    i{
        font-size: 0.9rem;
        margin-top: .1rem;
    }
}


select{
    padding: .8rem 1.7rem;
    border-radius: 5px;
    width: 200px;
    font-weight: 300;
    border: none;
    outline: 1px solid #d0d0d0;
    background-color: white;
    cursor: pointer;
}

select:focus{
        outline: 1px solid #3a5cee;
        transition: all .2s ease-in;
    }

.grid-container{
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
}


@media(max-width:1300px){
    .grid-container{
        grid-template-columns: repeat(3, 1fr);
    }
}

@media(max-width:1000px){
    .grid-container{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:650px){
    .grid-container{
        grid-template-columns: repeat(1, 1fr);
    }
}

`