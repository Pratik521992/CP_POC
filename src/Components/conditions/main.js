import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PaperSheet from './paper';

class Main extends Component{

    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <React.Fragment>
                <Typography variant="h5" component="h3">
                    Please fill as per your requirment
        </Typography>
                <PaperSheet />
            </React.Fragment>
        )
    }




}

export default Main;