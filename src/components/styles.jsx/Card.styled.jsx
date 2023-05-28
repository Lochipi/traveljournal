import styled from "styled-components";

export const CardStyled = styled.div`
    display: flex;
    column-gap: 1em;
    width: 470px;
    height: 168px;
    margin: 2em 2em;

    .image--div img{
        width: 125px;
        height: 180px;
        border-radius: 5px;
    }

    .location-content{
        display: flex;
        column-gap: 1em;
        align-items: flex-end;
    }


    .location-content h5{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 10.24px;
        letter-spacing: 0.17em;
    }

    .location-content p a{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 10.24px;
        line-height: 12px;
        text-decoration-line: underline;
        color: #918E9B;
        cursor: pointer;
    }

    .div--content h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 30px;
        color: #2B283A;
        margin: 0.2em 0 0.5em  0;
    } 

    .info .date {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 10.24px;
        line-height: 12px;
        margin: 0 0 0.5em 0;
    }

    .info .desc{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 10.24px;
        line-height: 150%;
        color: #2B283A;
    }
`