import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './InputSearch.scss';
import { connect } from 'react-redux';
import { SearchState, SearchActionTypes } from '../../types/index';
import { searchTweets } from '../../store/search/actions/index';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

/*
 *  Input search component.
 */
class InputSearch extends Component<ReduxType> {
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.searchTweets(e.target.value);
  }
  render() {
    return (
      <div className="input-search">
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          helperText="Happy Hacking !"
          className="input"
          onChange={this.onInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  };
}

/*
 *  Store props mapping.
 */
const mapStateToProps = (state: SearchState) => ({
  search: state.search
});

/*
 *  Store actions.
 */
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      searchTweets
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
