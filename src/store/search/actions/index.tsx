import { SEARCH_TWEETS, SET_HASHTAGS } from '../../../utils/constants';
import { SearchActionTypes } from '../../../types/index';

/* Actions' definition */

export function searchTweets(search_param: string): SearchActionTypes {
  return {
    type: SEARCH_TWEETS,
    search: search_param
  }
}

export function setHashtags(hash_tags: Array<unknown>): SearchActionTypes {
  return {
    type: SET_HASHTAGS,
    hashtags: hash_tags
  }
}

