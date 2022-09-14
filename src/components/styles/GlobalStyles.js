import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Albert Sans', sans-serif;
}

img{
    max-width: 100%;
}
p{
    line-height: 1.45rem;
}
.container{
    max-width: 1600px;
    margin: 0 auto;
    padding-left: 5rem;
    padding-right:5rem;
}

.google-auth{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    border: 1px solid #d0d0d0;
    padding: .7rem 1.7rem;
    border-radius: 5px;
    cursor: pointer;
}

.google-auth p{
    color: #3c3c3c;
}


`