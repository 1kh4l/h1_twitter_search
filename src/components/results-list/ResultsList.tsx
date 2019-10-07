import React, { Component } from 'react'
import './ResultsList.scss';
import Tweet from './../tweet/Tweet';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {connect} from 'react-redux';
import HashtagsList from './../hashtags-list/HashtagsList';
import { SearchState } from '../../types/index';
import { AppState } from '../../store';
import { setHashtags } from '../../store/search/actions/index';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

/*
 *  GraphQl api url.
 */
const axiosGraphqlAPI = axios.create({
  // baseURL: 'http://localhost:3000/graphql',
  baseURL: 'https://salty-tundra-04338.herokuapp.com/graphql',
});

class ResultsList extends Component<ReduxType> {
  tweets: Array<any> = [];

  componentDidMount() {
    this.onFetchFromTwitter('hackerOne');
  };

  componentDidUpdate({search: prevSearch}: SearchState){
    const { search } = this.props;
    if(search !== prevSearch){
      this.onFetchFromTwitter(search);
    }
  }

  /*
   * It fetchs the data from the graphql api. 
   */
  onFetchFromTwitter = (search: string) => {
    const GET_TWEETS = `
      {
        tweets(searchParam:${search}, limit: 100) {
          results {
            id
            text
            likes
            rts
            user {
              id
              name
              accountName
              description
              followers
              friends
              photoUrl
            }
          }
          topHashtags {
            name
            ocurrences
          }
        }
      }
    `;
   axiosGraphqlAPI
      .post('', { query: GET_TWEETS })
      .then(result => {
        if (result.data) {
          if (result.data.hasOwnProperty('data')) {
            this.tweets = result.data.data.tweets.results;
            this.props.onSetHashtags(result.data.data.tweets.topHashtags);
            this.forceUpdate();
          }
        }
      });
  };

  render() {
    return (
      <div className="tweets-list">
        <Grid container direction="row" className="grid-tweets">
          <div className="tweets">
            <Card className="card-tweets">
              <div className="bar">
                <h6 className="title">TOP 100 ~TWEETS</h6>
              </div>
              <div className="container-list">
                {this.tweets.map( tweet=>
                    <Tweet entity={tweet} key={tweet.id}/>
                )}
              </div>
            </Card>
          </div>
          <HashtagsList className="hashtag-list" list={this.props.hashtags}/>
        </Grid>
      </div>
    );
  };
}

/*
 *  Store props mapping.
 */
const mapStateToProps = ({search: state}: AppState) => {
  return {
    search: state.search,
    hashtags: state.hashtags
  }
};

/*
 *  Store actions.
 */
const mapDispatchToProps = () => ({
  onSetHashtags: setHashtags
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
