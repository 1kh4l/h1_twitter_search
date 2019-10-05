import React, { Component }  from 'react';
import { SearchState } from './../../types/index';
import './App.scss';
import Header from './../header/Header';
import SearchHome from './../search-home/SearchHome';
import { Provider } from 'react-redux';
import store from './../../store';

const App: React.FC = () => {
  return(
    <Provider store={store}>
      <div className="App">
        <Header/>
        <SearchHome/>
      </div>
    </Provider>
  );
}

export default App;
