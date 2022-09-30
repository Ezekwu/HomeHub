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
    max-width: 1550px;
    margin: 0 auto;
    padding-left: 4rem;
    padding-right:4rem;
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

@media(max-width:900px) {
    .google-auth{
        width: 100%;
    }
}

@media(max-width:700px) {
    .container{
        padding-left: 3rem;
        padding-right:3rem;
    }
}

@media(max-width:600px) {
    .container{
        padding-left: 1.5rem;
        padding-right:1.5rem;
    }
}
`