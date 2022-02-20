import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from "../reducers/GlobalState";
import styled from "styled-components";

import Navigation from '../pages/header';
import Main from "../pages/main";
import Footer from "../pages/footer";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: -webkit-box; 
  display: -ms-flexbox;  
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: abel;
  background: ${props => props.background}
  background: ${props => props.backgroundGradient}
`
function App() {
  const {weather} = useContext(GlobalContext);
  const [background,setBackground] = useState();
  const [backgroundGradient, setBackgroundGradient] = useState();
    useEffect(()=>{
        if(weather?.weather[0].main === 'Clouds'){
            setBackground('var(--cloudy-background);');
            setBackgroundGradient('var(--cloudy-background-gradient);');
        }else if(weather?.weather[0].main === 'Clear'){
          setBackground('var(--clear-background);');
          setBackgroundGradient('var(--clear-background-gradient);');
        }else if(weather?.weather[0].main === 'ThunderStorm'){
          setBackground('var(--thunder-background);');
          setBackgroundGradient('var(--thunder-background-gradient);');
        }else if(weather?.weather[0].main === 'Rain' || 'Drizzle' || 'Snow'){
          setBackground('var(--rain-background);');
          setBackgroundGradient('var(--rain-background-gradient);');
        }else{
          setBackground('var(--thunder-background);');
          setBackgroundGradient('var(--thunder-background-gradient);');
        }
    }, [background, weather?.weather]);
  return (
    <Router>
      <StyledContainer background={background} backgroundGradient={backgroundGradient}>
        <Navigation />
        <Main />
        <Footer />
      </StyledContainer>

    </Router>
  );
}

export default App;
