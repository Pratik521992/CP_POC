import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ParentComponent from './Actions/ButtonContainer';
import Anydropdownn from './dropDown';
import CustomizedInputs from './Actions/text';
import Main from './conditions/main';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
    numChildren : 0
    
  };
  

  handleChange = (event, value) => {
    this.setState({ value });
  };

  onaddchild = ()=>{
    
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  };

  render() {

    const children = [];
    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<CustomizedInputs key={i} number={i} />);
    };


    const { classes } = this.props;
    const { value } = this.state;
    const names = [
        'article',
        'email',
        'ipp',
        'cme',
        'Omar Alexander',
        'headline',
        'impr',
        'infosite',
        'partner',
        'pla',
        'scene',
        'search',
        'social mtv',
        'offline'
      ];
      
    
    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs fullWidth value={value} onChange={this.handleChange}>
              <LinkTab label="Triggers" href="page1" />
              <LinkTab label="Conditions" href="page2" />
              <LinkTab label="Actions" href="page3" />
            </Tabs>
          </AppBar>
          {value === 0 && <Anydropdownn names = {names} />}
          {value === 1 && <Main />}
          {value === 2 && <ParentComponent addChild = {this.onaddchild}>{children}</ParentComponent>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);