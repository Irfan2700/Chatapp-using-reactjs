import logo from './logo.svg';
import './App.css';
import SignIn from './components/Sign-In/SignIn';
import SignUp from './components/Sign-Up/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </ Router>
    
  );
}

export default App;
