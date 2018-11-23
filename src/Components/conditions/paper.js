import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SwitchesGroup from './switches';
import TextField from '@material-ui/core/TextField';
import OutlinedTextFields from './conditionText';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
   
    
    padding : 40,
    margin : 50
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
       
        <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>

          <SwitchesGroup  />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          when( )
          <br />
          <TextField
          id="outlined-name"
          label="enter When value"
         
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

          
          
          </Paper>
        </Grid>
        </Grid>
        <Typography component="p">
            <OutlinedTextFields />
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);