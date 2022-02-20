import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../reducers/GlobalState';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons'

import WeatherDetails from '../weatherDetails';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    @media screen and (min-width: 1025px){
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
    }
`
const GlassMorphism = styled.article`
    width:90%;
    box-sizing: border-box;
    padding: 1rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;

    background: rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    color: #E5E5E5;
    @media screen and (min-width: 1025px){
        width:50%;
        min-height: 30vh;
        max-height: 30vh;
    }

`;

const StyledH1 = styled.h1`
    font-size: 1.5rem;
    grid-area: 1/1/2/3;
    text-transform: uppercase;
    @media screen and (min-width: 1025px){
        font-size: 3rem;
    }
`;

const StyledImg = styled.img`
    grid-area: 4 / 3 / 5 / 5;
`;

const StyledParagraph = styled.p`
    font-size: 1rem;
    &.descr{
        grid-area: 1/3/2/5;
    }
    &.press{
        grid-area: 3 / 1 / 4 / 3;
    }
    &.wind{
        grid-area: 4/1/5/3;
    }
    @media screen and (min-width: 1025px){
        font-size: 1.5rem;
    }
`;

const StyledDiv = styled.div`
    grid-area: 2/1/3/4;
    display: flex;

`
const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2.8rem;
    margin-right: .5rem;
    @media screen and (min-width: 1025px){
        font-size: 4rem;
    }
`

export default function WeatherCard(){
    const {weather} = useContext(GlobalContext);
    useEffect(()=>{
       
    }, [weather.weather]);


    return(
        <MainContainer>
            <GlassMorphism>
                <img src={`${process.env.REACT_APP_ICON_URL}${weather.weather[0].icon}.png`} alt="pogoda"></img>
                <StyledH1>{weather.name}</StyledH1>
                <StyledDiv>
                    <StyledIcon icon={faTemperatureLow}/>
                    <div>
                        <StyledParagraph>{weather.main.temp} &deg;C</StyledParagraph>
                        <StyledParagraph>Odczuwalna: {weather.main.feels_like} &deg;C</StyledParagraph>
                    </div>
                </StyledDiv>
                <StyledParagraph className="press">Ciśnienie: {weather.main.pressure} hPa</StyledParagraph>
                <StyledParagraph className='descr'>{weather.weather[0].description}</StyledParagraph>
            </GlassMorphism>
            <WeatherDetails />
        </MainContainer>
    )
}