import React, { Component } from 'react'
import './TweetsList.scss';
import Tweet from './../tweet/Tweet';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {connect} from 'react-redux';
import HashtagsList from './../hashtags-list/HashtagsList';
import * as actionTypes from '../../store/actions';

const axiosGraphqlAPI = axios.create({
  // baseURL: 'http://localhost:3000/graphql',
  baseURL: 'https://salty-tundra-04338.herokuapp.com/graphql',
});

class TweetsList extends Component {
  tweets = [];

  componentDidMount() {
    this.onFetchFromTwitter('hackerOne');
  };

  componentDidUpdate({search: prevSearch}){
    const { search } = this.props;
    if(search !== prevSearch){
      this.onFetchFromTwitter(search);
    }
  }

  onFetchFromTwitter = (search) => {
    const GET_TWEETS = `
      {
        tweets(searchParam:${search}, limit: 5) {
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
        this.tweets = result.data.data.tweets.results;
        this.props.onSetHashtags(result.data.data.tweets.topHashtags);
        this.forceUpdate();
      });
  };

  render() {
    return (
      <div className="tweets-list">
        <Grid container direction="row" className="grid-tweets">
          <div className="tweets">
            <Card className="card-tweets">
              <div className="bar">
                <h6 className="title">HOME</h6>
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

const mapStateToProps = state => {
    return {
        search: state.search,
        hashtags: state.hashtags
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetHashtags: (hashtags) => dispatch({type: actionTypes.SET_HASHTAGS, hashtags })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TweetsList);
