import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles =theme=>( {
  card: {
    maxWidth: 600,
    padding: 100,
    margin: 60
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard(props) {
  const { classes } = props;
  const names = props.names;
  

  return (

    <Grid container direction="row" justify="center" alignItems="center">
    <Card className={classes.card}>
      <CardContent>
        
        
        <form autoComplete="off">
        <Button className={classes.button}>
          Select Trigger
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
          <Select
            
            
            inputProps={{
              name: 'age',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={name.indexOf(name) > 1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
      </CardContent>
      <CardActions>
        <Button size="small">Click to Add more triggers</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);