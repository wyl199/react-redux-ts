import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { createBrowserHistory, History } from 'history'
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import Home from './Home/Home';
import * as serviceWorker from './serviceWorker';
import useCreateStore from './store';

// Create a history of your choosing (we're using a browser history in this case)
const history: History = createBrowserHistory();
const store = useCreateStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route exact path="/home" render={() => <Home />} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();