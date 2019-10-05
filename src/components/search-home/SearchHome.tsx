import React from 'react';
import './SearchHome.scss';
import InputSearch from './../input-search/InputSearch';
import ResultsList from './../results-list/ResultsList';
import Grid from '@material-ui/core/Grid';

interface Props {
  className?: string;
}
/*
 *  Home page component.
 */
const SearchHome: React.SFC<Props> = (props) => {
  return (
    <div className="home">
      <Grid container direction="column" alignItems="center" className="grid-home">
        <InputSearch/>
        <Grid container direction="row" justify="space-evenly" alignItems="flex-start" className="grid-results">
          <ResultsList/>
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchHome;
