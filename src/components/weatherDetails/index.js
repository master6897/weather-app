import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../reducers/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faCloudSun, faMoon, faCloud } from '@fortawesome/free-solid-svg-icons'

const MainContainer = styled.article`
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    width: 95%;
    box-sizing: border-box;
    min-height: 10vh;
    background: transparent;
    @media screen and (min-width: 1025px){
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: space-around;
        width:50%;
        margin-top: 0;
        padding: 2rem;
    }
`

const GlassMorphism = styled.div`
    min-width:20%;
    min-height: 10vh;
    box-sizing: border-box;
    padding: .5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    background: rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    color: #E5E5E5;
    @media screen and (min-width: 1025px){
        max-height: 30vh;
        min-width: 40%;
        justify-content: center;
        box-sizing: border-box;
        margin: 0 1rem 1rem 0 ;
        & p {
            font-size: 2rem;
        }
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
    @media screen and (min-width: 1025px){
        font-size: 4rem;
    }
`

export default function  WeatherDetails(){
    const {weather} = useContext(GlobalContext);
    console.log(weather);
    return(
        <MainContainer>
            <GlassMorphism>
                <StyledIcon icon={faWind} />
                <p>{weather.wind.speed} m/s</p>
            </GlassMorphism>
            <GlassMorphism>
                <StyledIcon icon={faCloudSun} />
                <p>{new Date(weather.sys.sunrise*1000).toLocaleTimeString()}</p>
            </GlassMorphism>
            <GlassMorphism>
                <StyledIcon icon={faMoon} />
                <p>{new Date(weather.sys.sunset*1000).toLocaleTimeString()}</p>
            </GlassMorphism>
            <GlassMorphism>
                <StyledIcon icon={faCloud} />
                <p>{weather.clouds.all}%</p>
            </GlassMorphism>
        </MainContainer>
    )
}
