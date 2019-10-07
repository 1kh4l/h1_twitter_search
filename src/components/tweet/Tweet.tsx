import React from 'react';
import './Tweet.scss';
import HeartLike from './../heart-like/HeartLike';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@iconify/react';
import twitterRetweet from '@iconify/icons-mdi/twitter-retweet';

interface Props {
  entity?: any;
}
/*
 *  Tweet component.
 */
const Tweet: React.FC<Props> = (props) => {
  const data = props.entity;
  const user = data.user;
  return (
    <div className="tweet-card">
      <Card>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className="tweet-container">
          <div className="profile-photo">
            <ListItemAvatar>
              <Avatar alt="test" src={user.photoUrl}/>
            </ListItemAvatar>
          </div>
          <div className="tweet-info">
            <Grid container direction="column" justify="flex-start" alignItems="flex-start" className="user">
              <div className="user-container">
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" className="info">
                  <div className="name">
                    <Typography variant="h6" gutterBottom>
                      {user.name}
                    </Typography>
                  </div>
                  <div className="account">
                    <Typography variant="body2" gutterBottom>
                      @{user.accountName}
                    </Typography>
                  </div>
                </Grid>
              </div>
              <div className="tweet">
                <div className="text">
                  <Typography variant="body2" gutterBottom>
                    {data.text}
                  </Typography>
                </div>
              </div>
              <div className="icons">
                <Grid container direction="row" className="grid-icons">
                  <div className="likes">
                    <Grid container direction="row" className="grid-likes">
                      <HeartLike/>
                      <span className="number-likes">
                        {data.likes}
                      </span>
                    </Grid>
                  </div>
                  <div className="retweets">
                    <Grid container direction="row" className="grid-rts">
                      <Icon icon={twitterRetweet} className="rts"/>
                      <span className="number-rts">
                        {data.rts}
                      </span>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        </Grid>
      </Card>
    </div>
  )
}

export default Tweet;
