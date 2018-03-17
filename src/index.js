import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import App from './components/App';
import Order from './components/Order';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
function auth() {
  const user = localStorage.getItem('user');
  if (user) {
    browserHistory.push('/app');
  } else {
    browserHistory.replace('/signin');
  }
}
 
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" onEnter={auth}/>
    <Route path="/app" component={App} />
    <Route path="/orders" component={Order} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Router>
</Provider>, document.getElementById('root')
)
