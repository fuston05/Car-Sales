import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

//reducers
import {carReducer} from './reducers/carReducer';

//components
import App from './App';

//styles
import 'bulma/css/bulma.css';
import './styles.scss';

//store
const store= createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store= {store}>
  <App />
</Provider>
, rootElement);
