import React from "react";
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Homepage from "./pages/Homepage";
import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {/* <Route path='/' component={Homepage} /> */}
        {/* <Route path='/' component={Homepage} /> */}

        <Homepage /> 
      </div>           
    </div>
  );
}

export default App;
