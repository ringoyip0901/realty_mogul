import React, { Component } from 'react';
import { data } from './data.js'
import Header from './components/Header'
import Content from './components/Content'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      button: false,
      showA: true,
      showB: false, 
    }
  }

  componentDidMount() {
    this.setState({
      data: data,
    })
  };

  changeButton = () => {
    this.setState(state => {
      return state.button ? { button: false } : { button: true };
    })
  };

  contentChange = () => {
    this.setState(state => {
      return !state.showB ? { showA: false, showB: true } : { showA: true, showB: false};
    })
  };

  render() {
    const { data = {}, button, showA, showB } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className='header'>
            <Header 
              button={button} 
              headerData={data.headerData || []} 
              changeButton={this.changeButton} 
              />
          </div>
          <div className='content'>
            {!button && 
            <Content 
              showA={showA}
              showB={showB}
              contentA={data.contentA || " "} 
              contentB={data.contentB || " "} 
              contentChange={this.contentChange}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
