
import React, { Component } from 'react';
import Chartjs from 'chart.js';
import { AreaChart, PieChart } from 'react-chartkick';


class Counter extends Component {
    render() {
        return (
            <div className="row">
                <div className="row">
                    <div>
                        <h4> Counters (past 6 hours)</h4>
                        <hr />
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title"> <i className="material-icons">folder</i> Total Records </span>
                                <h2> <center> {this.props.totalReqCount} </center> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title"> <i className="material-icons">clear_all</i> Log request types </span>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.totalDistinctCount.map((x) => {
                                            return (
                                                <tr>
                                                    <td> {x.group} </td>
                                                    <td> {x.reduction} </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title"> <i className="material-icons">access_time</i> Average Req Time (ms)</span>
                                <h4> <center> {this.props.averageResTime} </center> </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className="col s12 m4 l4">
                        <PieChart data={this.props.sucessStatus} />
                    </div>
                    <div className="col s12 m8 l8">
                        <AreaChart data={this.props.respArray} />
                        {/* <AreaChart data={{"2017-01-01 00:01": 11, "2017-01-02 00:02": 6}} /> */}
                        {/* <AreaChart data={[{"2017-01-01 00:00:00 -0800":18.0162},{"2017-01-01 00:10:00 -0800":11.016200000000001}]} /> */}
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 m12 l12'>
                    {/* <GeoChart data={[["United States", 44], ["Germany", 23], ["Brazil", 22], ["india", 22]]} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
