import React from 'react';

import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import { Route ,Switch} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

import './App.css';
import Pagenotfound from './components/pagenotfound/Pagenotfound';

function App() {
  return (
    <div className="App">
          <Navigation />
          <Switch>
            <Route
            exact
            path="/"
            render={props =><Welcome {...props} name="HICHAM"/>}/>

    <Route
  exact
  path="/welcome/:name"
  render={(props) => <Welcome {...props}  
  name={props.match.params.name}
 
  />}
/>
    <Route exact
    path="/clock" component={Clock} />
    <Route exact
    path="/contact" component={Contact} />
    <Route exact component={Pagenotfound}></Route>

    </Switch>

    </div>
  );
}

export default App;
