import { BrowserRouter } from 'react-router-dom';

import { Route, Switch, Redirect } from 'react-router-dom';

import PhoneBook from './components/PhoneBook/PhoneBook';
import routes from 'routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={PhoneBook} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;