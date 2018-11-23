import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

class SwitchesGroup extends React.Component {
  state = {
    AllOf: true,
    Anyof: false,
    None: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  
  render() {
    const styles =  {
      root: {
        width : 500,
        padding : 40,
        margin : 50
      },
    };
    return (
      <FormControl className={styles.root} component="fieldset">
        <FormLabel component="legend">Select condition</FormLabel>
        <FormGroup>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <FormControlLabel
                control={
                  <Switch

                    onChange={this.handleChange('AllOf')}
                    value="AllOf"
                  />
                }
                label="Allof"
              />
            </Grid>
            <Grid item xs={8}>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.jason}
                onChange={this.handleChange('Anyof')}
                value="Anyof"
              />
            }
            label="Anyof"
          />
          </Grid>
          <Grid item xs={8}>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.antoine}
                onChange={this.handleChange('None')}
                value="None"
              />
            }
            label="None"
          />
          </Grid>
          </Grid>
        </FormGroup>
       
      </FormControl>
    );
  }
}

export default SwitchesGroup;