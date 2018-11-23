import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

  const theme = createMuiTheme({
    palette: {
      primary: green,
      display: 'flex',
      flexDirection: 'row wrap',
      padding: 20,
      width: '100%'
    },
    typography: { useNextVariants: true },
  });
const ParentComponent = props =>{
    const  classes  = styles;

    return (
    <div id="addtactic">
    <MuiThemeProvider theme={theme}>
        <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon onClick={props.addChild} />
      </Button>
      <label>Add Tactic ID</label>
      <div id="children-pane">
        {props.children}
      </div>
      </MuiThemeProvider>
    </div>
  )};

  export default ParentComponent;