import React from 'react';
import cx from 'classnames';
import './App.css';
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import theme from "./theme";
import Lesson4 from "./lessons/lesson4";


const useStyles = makeStyles(theme => ({
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red'
  },
  buttonStyle: {
    [theme.breakpoints.up('sm')]: {
      color: 'white'
    }
  },
  backgroundColor: {
    background: 'blue',
  }
}))

function App() {
  const classes = useStyles();

  return (
    <>
      <Button fullWidth className={cx(classes.buttonStyle, classes.backgroundColor)}>Push Here</Button>
      <Typography className={classes.helloThereStyle} color='secondary' variant='h1'>Hello there</Typography>
      <Button color='primary' variant='outlined'>
        First Button
      </Button>
      <Lesson4 />
    </>
  );
}

export default App;
