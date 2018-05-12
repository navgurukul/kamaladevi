import React, { Component } from 'react';
import './css/styles.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      loading: true,
      isLoginPath: false,
      isHomePath: false,
      headerTitle: '',
      currentRoute: ''
    }
  }

  componentDidMount(){
    this.setState({
      loading: false
    })
  }

  render() {
    if(this.state.loading){
      return(
        <div>
          <div id="loading-wrapper"></div>
          <div id="loading-content"></div>
        </div>
        );
    }
    else{
      return(
          <h1>
            start decomposing app.component.html from angular here 
            and pulling out components to the components folder
          </h1>
        );
    }
  }
}

export default App;
