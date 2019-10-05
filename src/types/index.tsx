import { SEARCH_TWEETS, SET_HASHTAGS } from './../utils/constants/index';

/* SEARCH STORE INTERFACE */
export interface SearchState {
  search: string;
  hashtags: Array<unknown>;
}

/* SEARCH STORE ACTIONS INTERFACES */

export interface SearchTweets {
  type: SEARCH_TWEETS;
  search: string;
}

export interface SetHashtags {
  type: SET_HASHTAGS;
  hashtags: Array<unknown>;
}

export type SearchActionTypes = SearchTweets | SetHashtags;

