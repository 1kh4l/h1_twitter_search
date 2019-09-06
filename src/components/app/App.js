import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './../../store/reducer';
import Header from './../header/Header';
import SearchHome from './../search-home/SearchHome';


class App extends Component {
  render() {
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store={store}>
          <div className="App">
            <Header/>
            <SearchHome/>
          </div>
      </Provider>
    );
   }
}

export default App;
