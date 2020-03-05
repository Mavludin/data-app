import React from 'react';
import './App.css';

import ChoicePage from './containers/ChoicePage/ChoicePage';
import DataPage from './containers/DataPage/DataPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  state = {
    showLoader: true,
    recievedData: []
  }

  getDataFromBackEnd = (data) => {
    this.setState({showLoader: false, recievedData: data})
  }

  addNewData = (obj) => {
    const tempArray = this.state.recievedData;
    tempArray.unshift(obj);
    this.setState({recievedData: tempArray})
  }

  backToChoice = () => {
    this.setState({showLoader: true, recievedData: []})
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route 
              exact path="/" 
              render={(props)=>
                <ChoicePage 
                  {...props} 
                  getDataFromBackEnd={this.getDataFromBackEnd}
                />
              } 
            />
            <Route 
              exact path='/data'
              render={(props)=>
                  <DataPage 
                    {...props} 
                    recievedData={this.state.recievedData} 
                    showLoader = {this.state.showLoader}
                    addNewData={this.addNewData}
                    backToChoice={this.backToChoice}
                  />
                } 
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
