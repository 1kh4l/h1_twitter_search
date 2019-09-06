import React from 'react'
import './HashtagsList.scss';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const HashtagsList = (props) => {
  return (
    <div className="hashtags-list">
      <Grid container direction="column" justify="center" alignItems="center" className="grid-container">
        <div className="hashtags">
          <Card className="card-hashtags">
            <div className="bar">
              <h6 className="title">TOP 10 #Hashtags</h6>
            </div>
            <div className="container-hashtags">
              {props.list.map(hashtag=>
                <Grid container direction="row" key={hashtag.name} className="grid-hashtag">
                  <div className="hashtag-name">
                    <h6 className="title-hashtag">#{hashtag.name}</h6>
                  </div>
                  <div className="ocurrences">
                    <h6 className="title-ocurrences">{hashtag.ocurrences}</h6>
                  </div>
                </Grid>
              )}
            </div>
          </Card>
        </div>
      </Grid>
    </div>
  );
}

export default HashtagsList;
