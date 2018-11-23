import React, { Component } from 'react';

import NavTabs from './Tabs';



class Top extends Component {

  constructor (){
    super()
    this.state = {
      name : []
    }
  }
  
    render() {
      
      
      return (

      <div>
        <NavTabs />
        
        
        
      </div>
     
      );
    }
  }
  
  export default Top;
  