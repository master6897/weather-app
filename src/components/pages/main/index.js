import React, { useEffect, useState } from "react";
import WeatherCard from "../../weatherCard";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  position: relative;
  background-color: black;
`;
export default function Main() {
  
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState('true');

  useEffect(() => {
    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            console.log(lat + " drugie " + long);
        }, ()=> {
            alert('Nie udało się pobrać Twojej lokalizacji');
        });
        if(lat && long){
           await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&lang=pl&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
            setData(result)
            setLoading('false');
            console.log(result);
            });
        }
    }
    fetchData();
  }, [lat,long])
  
  return (
    <StyledContainer>
      {loading === 'false'? <WeatherCard data={data} /> :
        <></>
        }
    </StyledContainer>
  );
}