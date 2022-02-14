import React from "react";
import styled, {keyframes} from "styled-components";

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 53%, rgba(0,212,255,1) 100%);
    position: absolute;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const StyledCircle = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    & div{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: ${spinner} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    & div:nth-child(1){
        animation-delay: -0.45s;
    }
    & div:nth-child(2){
        animation-delay: -0.45s;
    }
    & div:nth-child(3){
        animation-delay: -0.45s;
    }
`
const StyledTitle = styled.h1`
    color: white;
    font-size: 2rem;
`
function LoadingWindow(){
    return(
        <StyledDiv>
            <StyledTitle>Loading...</StyledTitle>
            <StyledCircle>
                <div></div><div></div><div></div><div></div>
            </StyledCircle>
        </StyledDiv>
    )
}

export default LoadingWindow;