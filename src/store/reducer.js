import * as actionTypes from './actions';

const initialState = {
  search: '',
  hashtags: []
}

const reducer =  (state = initialState, action) => {
  const {
    type,
    text,
    hashtags
  } = action;
  switch(type) {
    case actionTypes.SEARCH_TWEETS:
      return {
        ...state,
        search: text
      }
    case actionTypes.SET_HASHTAGS:
      return {
        ...state,
        hashtags
      }
    default:
      return state;
  }
}

export default reducer;
