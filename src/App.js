import React from "react";
// import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Homepage from "./pages/Homepage";
import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {/* <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/header' component={Header} />
        </Switch> */}
        <Homepage /> 
      </div>           
    </div>
  );
}

export default App;
