import React from 'react';
import './App.scss';
import Greeting from "./greeting/greeting";
import About from "./about/about";
import Skills from './skills/skills';

const App = () => {
    return (
      <div className='wrapper'>

            <Greeting />
    
            <About />
        
            <Skills />
            </div>

    );
};

export default App;

