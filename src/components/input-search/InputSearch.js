import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './InputSearch.scss';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

/*
 *  Input search component.
 */
class InputSearch extends Component {

  render() {
    return (
      <div className="input-search">
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          helperText="Happy Hacking !"
          className="input"
          onChange={this.props.onSearch}
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
const mapStateToProps = state => {
    return {
        search: state.search
    }
};

/*
 *  Store actions.
 */
const mapDispatchToProps = dispatch => {
    return {
        onSearch: (e) => dispatch({type: actionTypes.SEARCH_TWEETS, text: e.target.value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
