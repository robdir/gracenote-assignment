import React, { PureComponent } from 'react';
import './styles/appContainer.css'
import {connect} from 'react-redux'

class appContainer extends PureComponent {
    render() {

        const {sportData} = this.props

        return (
            <div className="main_container">
                <div className="intro">
                    <h3> An overview of the Dutch performance in the 2014 Winter Olympics </h3>
                </div>

                <table className="total_medals">
                    <tr>
                        <th> Country </th>
                        <th> Total Medals Won </th>
                        <th> Gold </th>
                        <th> Silver </th>
                        <th> Bronze </th>
                    </tr>
                    <tr>
                        <td> {sportData.NOCMedals.NOC.c_Name} </td>
                        <td> {sportData.NOCMedals.Medals.n_Total} </td>
                        <td> {sportData.NOCMedals.Medals.n_Gold} </td>
                        <td> {sportData.NOCMedals.Medals.n_Silver} </td>
                        <td> {sportData.NOCMedals.Medals.n_Bronze} </td>
                    </tr>
                </table>
            </div>
        )
    }
}

const mapStatetoProps = ({ sportData }) => ({ sportData })

export default connect(mapStatetoProps)(appContainer)

