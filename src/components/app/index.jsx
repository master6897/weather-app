import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from '../pages/header';
import Main from "../pages/main";
import Footer from "../pages/footer";

function App() {
  return (
    <Router>
      <div className="m-0 p-0 flex flex-col justify-center items-center w-full">
      <Navigation />
      <Main />
      <Footer />
      </div>

    </Router>
  );
}

export default App;
