import React, { Component } from 'react';
import './Material.css'
import './googlefont.css'
import Menu from './Menu.js';
import Counter from './Counters.js'
import io from 'socket.io-client';

let socket = io('http://localhost:1337/')

class App extends Component {

  constructor() {
    super();
    this.state = {
      feed: {
        'totalReqCount': 0,
        'totalDistinctReq': [],
        'averageResTime': 0,
        'sucessStatus': [],
        'respArray': []
      }
    }
    socket.on('broadcast', (newCallState) => this.handleStateChange(newCallState));
  }

  handleStateChange(newstate){
    this.state.feed = JSON.parse(newstate.description)
    this.setState(this.state)
    console.log(this.state.feed)
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <div>
          <Counter  totalReqCount={this.state.feed.totalReqCount} totalDistinctCount={this.state.feed.totalDistinctReq}
                    averageResTime={this.state.feed.averageResTime} sucessStatus={this.state.feed.sucessStatus}
                    respArray={this.state.feed.respArray} />
        </div>
      </div>
    );
  }
}

export default App;
