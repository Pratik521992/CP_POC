import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column wrap',
    margin: 20,
    padding: 20,
    maxWidth: 400
  },
  chip: {
    margin: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
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

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      
      
     
      <MuiThemeProvider theme={theme}>
      <TextField
          className={classes.margin}
          label="Tactic ID"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <Chip
        label="Assign"
        className={classes.chip}
        color="primary"
        variant="outlined"
      />
      <Chip
        label="Stop"
        className={classes.chip}
        color="primary"
        variant="outlined"
      />
        </MuiThemeProvider>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);