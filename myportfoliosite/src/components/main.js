import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingpage from './landingpage';


const Main = () => {
    <switch>
        <Route exact path="/" component={landingpage} />
    </switch>
}

export default Main;