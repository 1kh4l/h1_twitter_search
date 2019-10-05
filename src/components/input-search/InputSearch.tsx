import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './InputSearch.scss';
import { connect } from 'react-redux';
import { SearchState } from '../../types/index';
import { searchTweets } from '../../store/search/actions/index';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

/*
 *  Input search component.
 */
class InputSearch extends Component<ReduxType> {

  public onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSearch(e.target.value);
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

interface SearchProps {
  search?: string;
}

/*
 *  Store props mapping.
 */
const mapStateToProps = (state: SearchState, ownProps: SearchProps) => ({
  search: state.search
});

/*
 *  Store actions.
 */
const mapDispatchToProps = () => ({
  onSearch: searchTweets
});

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
