import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});



class OutlinedTextFields extends React.Component {
  state = {
   
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="a.tacticID"
          className={classes.textField}
         
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
        id="outlined-name"
          label="a.activityId"
         
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          
          id="outlined-name"
          label="a.activityname"
         
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          
          id="outlined-name"
          label="a.times"
         
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
         
          id="outlined-name"
          label="appname"
          
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="a.within"
          className={classes.textField}
          
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="p.professionId"
          className={classes.textField}
         
          margin="normal"
          variant="outlined"
        />
        
        <TextField
          id="outlined-name"
          label="p.country"
          className={classNames(classes.textField, classes.dense)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="p.specialityId"
         
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
         
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="p.occupationId"
         
          
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        
       
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);