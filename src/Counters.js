
import React, { Component } from 'react';
import Chartjs from 'chart.js';
import { AreaChart, PieChart, GeoChart } from 'react-chartkick';


class Counter extends Component {
    render() {
        return (
            <div className="row">
                <div className="row">
                     <div>
                        <h4> Counters (past 1 hour)</h4>
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
                        <div className='row'>
                            <h4> Success Rate </h4>
                        </div>
                        <div className='row'>
                            <PieChart colors={["#0ce821", "#d81740"]} data={this.props.sucessStatus} />
                        </div>
                    </div>
                    <div className="col s12 m8 l8">
                    <div className='row'>
                            <h4> Response time chart (last 4-6 minutes) </h4>
                        </div>
                        <div className='row'>
                        <AreaChart data={this.props.respArray} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 m12 l12'>
                    {/* <GeoChart data={[["United States", 44], ["Germany", 23], ["Brazil", 22], ["india", 22]]} /> */}
                    </div>
                </div>
                <div className='row'>
                <div className="col s12 m12 l12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title"> <i className="material-icons">clear_all</i> Log Stream </span>
                                <table>
                                    <thead>
                                        <tr>
                                            <th> Req Time </th>
                                            <th> pid </th>
                                            <th> response Time (ms)</th>
                                            <th> msg </th>
                                            <th> Status </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.respData.map((x) => {
                                            return (
                                                <tr>
                                                    <td> {x.reqStart} </td>
                                                    <td> {x.pid} </td>
                                                    <td> {x.ms} </td>
                                                    <td> {x.msg} </td>
                                                    <td> {x.res} </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
