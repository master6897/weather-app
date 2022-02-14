import React, { useEffect, useState, useContext } from "react";
import WeatherCard from "../../weatherCard";
import LoadingWindow from "../loadingPage";
import styled from "styled-components";
import { GlobalContext } from "../../reducers/GlobalState";
import WeatherForecast from "../../weatherForecast";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height:  60vh;
`;
function Main() {
  const {weather,setWeather} = useContext(GlobalContext);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [loading, setLoading] = useState('true');

  useEffect(() => {
    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            console.log(lat+ " "+long);
        }, ()=> {
            fetch(`${process.env.REACT_APP_API_URL}/weather/?q=Warszawa&units=metric&lang=pl&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
            setWeather(result)
            setLoading('false')
            console.log(weather);
            });
        });
        if(lat && long){
           await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&lang=pl&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
            setWeather(result)
            setLoading('false')
            console.log(weather);
            });
        }
    }
    fetchData();
  }, [lat, long])
  
  return (
    <StyledContainer>
      {loading === 'false'? <WeatherCard /> :
        <LoadingWindow />
        }
        {loading === 'false'? <WeatherForecast />: <LoadingWindow />}
    </StyledContainer>
  );
}

export default Main;