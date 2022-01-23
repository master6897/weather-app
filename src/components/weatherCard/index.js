import React from 'react';
import styled from 'styled-components';
import rain from '../../assets/gifs/rain.gif';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 2rem 0;
    box-sizing: border-box;
`
const GlassMorphism = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 15vh repeat(2, 7vh);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
    justify-content: center;
    background: rgba( 247, 240, 240, 0.1 );
    background: rgba( 247, 240, 240, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0px );
    -webkit-backdrop-filter: blur( 0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 70%;
    padding: 2rem;
    box-sizing: border-box;
    z-index: 2;
`;

const StyledH1 = styled.h1`
    font-size: 3.5rem;
    grid-area: 1/1/2/3;
    text-transform: uppercase;
`;

const StyledImg = styled.img`
    width: 70%;
    grid-area: 1 / 3 / 2 / 4;
`;

const StyledParagraph = styled.p`
    font-size: 1.5rem;
    &.descr{
        grid-area: 1/4/2/5;
    }
    &.press{
        grid-area: 3 / 1 / 4 / 2;
    }
`;

export default function WeatherCard({data}){
    return(
        <MainContainer>
            <img src={rain} alt="rain" style={{position: 'absolute', zIndex: 0, width: '100%', height: '100%', borderRadius: '10px'}}/>
            <GlassMorphism>
                <StyledH1>{data.name}</StyledH1>
                <StyledParagraph>Temperatura: {data.main.temp} &deg;C</StyledParagraph>
                <StyledParagraph className="press">Ciśnienie: {data.main.pressure} hPa</StyledParagraph>
                <StyledParagraph className='descr'>{data.weather[0].description}</StyledParagraph>
                <StyledImg src = {`${process.env.REACT_APP_ICON_URL}${data.weather[0].icon}.png`}/>
            </GlassMorphism>
        </MainContainer>
    )
}