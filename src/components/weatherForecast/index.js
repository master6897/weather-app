import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from "../reducers/GlobalState";


const StyledArticle = styled.article`
    display: flex;
    display: -webkit-box; 
    display: -ms-flexbox;  
    display: -webkit-flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin-top: 1rem;
    padding: 0.5rem;
    color: #E5E5E5;
    @media screen and (min-width: 481px){
        width: 90%;
    }
`
const StyledContainer = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    display: -webkit-box; 
    display: -ms-flexbox;  
    display: -webkit-flex;
    height: 100%;
    overflow: hidden;
    @media screen and (min-width: 481px){
        overflow-x: scroll;
    }
`

const StyledDiv = styled.div`
    display: flex;
    display: -webkit-box; 
    display: -ms-flexbox;  
    display: -webkit-flex;
    transition: 0.3s ease;
    & > img{
        margin-left: 5rem;
        width: 20%;
    }
    &#slider{
        flex-direction: column;
        @media screen and (min-width: 481px){
            flex-direction: row;
        }
    }
`

const StyledDayContainer = styled.div`
    box-sizing: border-box;
    padding: 2rem;
    border-radius: 15px;
    margin: 1rem;
    background: rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    min-width: 90vw;
    @media screen and (min-width: 481px){
        min-width: 40vh;
        margin: 0 1rem 1rem 0;
    }
`

const StyledH1 = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    &.title{
        font-size: 2rem;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 1.2rem;
    margin-right: .5rem;
    &.right-arrow{
        position: relative;
        bottom: 45%;
        left: 97%;
        @media screen and (min-width: 481px){
            display:none;
        }
    }
    &.left-arrow{
        position: relative;
        bottom: 45%;
        left: -15%;
        @media screen and (min-width: 481px){
            display:none;
        }
    }
    &.left-arrow-last{
        position: relative;
        bottom: 45%;
        left: -8%;
        @media screen and (min-width: 481px){
            display:none;
        }
    }
`

function WeatherForecast () {
    const {weather} = useContext(GlobalContext);
    const [data, setData] = useState([]);
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [slider, setSlider] = useState();
    useEffect(()=>{
        setLat(weather?.coord.lat);
        setLon(weather?.coord.lon);
        setSlider(document.getElementById('slider'));
        async function fetchData() {
            if (weather?.coord.lat && weather?.coord.lon) {
                await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&lang=pl&appid=${process.env.REACT_APP_API_KEY}`)
                    .then(res => res.json())
                    .then(result => {
                        setData(result);
                        console.log(result);
                    }, (error) => {
                        if (error) {
                            console.log('fail');
                        }
                    });
            }
        }
            fetchData();
    }, [lat, lon, weather?.coord.lat, weather?.coord.lon, slider])
        
    return(
        <StyledArticle>
            <StyledH1 className="title">Prognoza na 7 dni:</StyledH1>
            <StyledContainer>
                <StyledDiv id="slider">
                {data.daily?.slice(1).map((day, index) =>
                    <StyledDayContainer key={index}>
                        <StyledDiv>
                            <StyledH1>{(new Date(day.dt*1000)).toLocaleDateString('pl-PL', {weekday: 'long'})}</StyledH1>
                            <img src={`${process.env.REACT_APP_ICON_URL}${day.weather[0].icon}.png`} alt={day.weather[0].description}></img>
                        </StyledDiv>
                        <ol>
                            <li>{day.weather[0].description}</li>
                            <li>
                                <StyledIcon icon={faTemperatureLow} />
                                {day.temp.day} &deg;C . Odczuwalna: {day.feels_like.day} &deg;C
                            </li>
                            <li>
                                <StyledIcon icon={faTemperatureLow} />
                                w nocy: {day.temp.night}&deg;C  . Odczuwalna: {day.feels_like.night}&deg;C 
                            </li>
                            <li>Ciśnienie: {day.pressure} hPa</li>
                        </ol>
                    </StyledDayContainer>
                )}
                </StyledDiv>
            </StyledContainer>
        </StyledArticle>
    )
}

export default WeatherForecast;