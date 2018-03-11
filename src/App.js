import React, { Component } from 'react';
import './Material.css'
import './googlefont.css'
import './App.css'
import Menu from './Menu.js';
import Counter from './Counters.js'
import io from 'socket.io-client';

let socket = io('http://faithful-badger.hackathon.venom360.com:1337')

class App extends Component {

  constructor() {
    super();
    this.state = {
      feed: {
        'totalReqCount': 0,
        'totalDistinctReq': [],
        'averageResTime': 0,
        'sucessStatus': [],
        'respArray': [],
        'respData': [],
        'reqIPCountry': [],
      },
      MasterData: [{pid: 'loading ..', msg: 'loading ..', ms: 'loading ..'}]
    }
    socket.on('broadcast', (newCallState) => this.handleStateChange(newCallState));
  }

  handleStateChange(newstate){
    this.state.feed = JSON.parse(newstate.description)
    this.state.MasterData = this.state.feed.responseData;
    console.log("data is ", this.state.feed.reqIPCountry)
    this.setState(this.state)
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <div>
          <Counter  totalReqCount={this.state.feed.totalReqCount} totalDistinctCount={this.state.feed.totalDistinctReq}
                    averageResTime={this.state.feed.averageResTime} sucessStatus={this.state.feed.sucessStatus}
                    respArray={this.state.feed.respObj} respData={this.state.MasterData}
                    reqIPCountry={this.state.feed.reqIPCountry} />
        </div>
      </div>
    );
  }
}

export default App;
