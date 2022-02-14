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

`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
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
