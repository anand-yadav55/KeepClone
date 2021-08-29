import React, { useState } from 'react';
import Branding from './Branding.js';
import { useDispatch } from 'react-redux';
import { open, close } from '../state/actions/index';

import {
  Button,
  AppBar,
  IconButton,
  Fab,
  Toolbar,
  Menu,
  makeStyles,
} from '@material-ui/core';
import {
  ExitToApp,
  AccountCircle,
  Settings,
  Add,
  Search,
  More,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  addButton: {
    top: '-30px',
    margin: '0 auto',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  iconGroup: {
    position: 'absolute',
    right: '5%',
  },
}));
export default function Header(props) {
  const username = () => {
    let username = props.username[0].toUpperCase();
    for (let i = 1; i < props.username.length; i++) {
      if (username[i - 1] == ' ') {
        username += props.username[i].toUpperCase();
      } else {
        username += props.username[i];
      }
    }
    return username;
  };

  const dispatch = useDispatch();

  const [userName, setUserName] = useState(username);
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Fab
          color="secondary"
          aria-label="add"
          onClick={() => {
            console.log('64');
            dispatch({ type: 'open' });
          }}
          className={classes.addButton}
        >
          <Add />
        </Fab>
        <IconButton color="inherit">
          <Branding />
        </IconButton>
        <div className={classes.iconGroup}>
          <IconButton color="inherit">
            <AccountCircle bgcolor="success" />
          </IconButton>
          <IconButton color="inherit">
            <Settings />
          </IconButton>
          <IconButton color="inherit">
            <ExitToApp color="secondary" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
