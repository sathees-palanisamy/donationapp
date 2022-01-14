import DonationForm from './Components/DonationForm';
import NotFound from './Components/NotFound';
import DonationList from './Components/DonationList';
import Home from './Components/Home';
import { Route,Switch} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';

function App() {

  return (
    <Router> 
      <Nav /> 
      <Switch>
        <Route path="/form">
          <DonationForm />
        </Route>
        <Route path="/list">
          <DonationList />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
