import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepagepage.js';

const HatsPage=()=>{
  return(
  <div>
    <h1>HATS PAGE</h1>;
  </div>
  )
  
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
