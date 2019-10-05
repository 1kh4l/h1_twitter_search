import { createStore, combineReducers, Store } from 'redux';
import { searchReducer } from './search/reducers/index'
import { SearchState } from '../types/index';

const rootReducer = combineReducers({
  search: searchReducer,
})

const store: Store = createStore(
  rootReducer  
);

export default store;
