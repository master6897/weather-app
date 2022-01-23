import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Navigation from '../pages/header';
import Main from "../pages/main";
import Footer from "../pages/footer";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: abel;
`
function App() {
  return (
    <Router>
      <StyledContainer>
        <Navigation />
        <Main />
        <Footer />
      </StyledContainer>

    </Router>
  );
}

export default App;
