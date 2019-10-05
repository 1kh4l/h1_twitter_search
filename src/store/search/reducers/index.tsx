import { SearchState, SearchActionTypes } from '../../../types/index';
import { SEARCH_TWEETS, SET_HASHTAGS } from '../../../utils/constants/index';

const initialState: SearchState = {
  search: "",
  hashtags: []
};

export function searchReducer(state = initialState, action: SearchActionTypes): SearchState {

  switch (action.type) {
    case SEARCH_TWEETS:
      return {
        ...state,
        search: action.search
      };
    case SET_HASHTAGS:
      return {
        ...state,
        hashtags: action.hashtags
      };
    default:
      return state;
  }
}
