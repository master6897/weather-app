import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
    position: absolute;
    left:-400px;
    top:5px;
    background: grey;
    height: 50px;
    width: 80%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: red;
    color: white;
    transition: all 0.6s ease-out;
    @media screen and (min-width: 1025px){
        width:32%;
    }
    ${props => props.fail === 'true' ? 
    'transform: translate(40vw);' : 'transform: translate(-100vw);'
    
}
`
function Popup(props){
    const [fail,setFail] = useState();
    useEffect(() =>{
        setFail(props.fail);
    },[props.fail,fail, setFail])
    return(
            <StyledArticle fail={fail}>
                <h1>Nie znaleziono miasta. Spróbuj ponownie</h1>
                {props.children}
            </StyledArticle>
    )
}

export default Popup;