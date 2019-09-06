import React from 'react'
import react_logo from './../../assets/images/react_logo.svg';
import h1_logo from './../../assets/images/h1_logo.svg';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Grid container direction="row" justify="space-between" alignItems="center">
            <img src={h1_logo} className="h1-logo" alt="logo" />
            <Typography className="title" variant="h6" noWrap>
              TWITTER SEARCH ENGINE
            </Typography>
            <img src={react_logo} className="react-logo" alt="logo" />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
