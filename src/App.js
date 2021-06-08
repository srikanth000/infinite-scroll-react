import './App.css';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../src/pages/errors/NotFoundPage'
import HomePage from '../src/pages/HomePage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route component={NotFoundPage}/>
    </Switch>
  );
}

export default App;
