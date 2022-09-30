import styled from "styled-components";

export const StyledListings = styled.section`
padding-top: 3rem;
padding-bottom: 3rem;
display: grid;
gap: 1rem;
grid-template-columns: repeat(4, 1fr);
width: 100%;


@media(max-width:1300px){
    grid-template-columns: repeat(3, 1fr);
}

@media(max-width:1000px){
    grid-template-columns: repeat(2, 1fr);
}

@media(max-width:650px){
    grid-template-columns: repeat(1, 1fr);
}

`