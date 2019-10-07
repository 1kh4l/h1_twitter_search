import { createStore, combineReducers, Store } from 'redux';
import { searchReducer } from './search/reducers/index';

const rootReducer = combineReducers({
  search: searchReducer
})

const store: Store = createStore(
  rootReducer  
);

export type AppState = ReturnType<typeof rootReducer>;
export default store;
