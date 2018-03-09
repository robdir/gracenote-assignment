import React, { PureComponent } from 'react';
import './styles/appContainer.css'
import {connect} from 'react-redux'
import SpeedTable from './speedTable'

class appContainer extends PureComponent {
    render() {

        const {sportData} = this.props

        return (
            <div className="main_container">
                <div className="intro">
                    <h3> An overview of the Dutch
                         performance in the 2014 Winter Olympics
                    </h3>
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
            
                <div className="description">
                    <p> Below you can find a more detailed breakdown of
                        medal winnings, listed by sport type and participants. 
                    </p>
                </div>

                <h3> Sport-Type </h3>

                <table className="medal_breakdown">
                    <tr>
                        <th> Type  </th>
                        <th> Total Medals Won </th>
                        <th> Gold </th>
                        <th> Silver </th>
                        <th> Bronze </th>
                    </tr>
                    <tr>
                        <td> {sportData.SportList[0].Sport.c_Name} </td>
                        <td> {sportData.SportList[0].Medals.n_Total} </td>
                        <td> {sportData.SportList[0].Medals.n_Gold} </td>
                        <td> {sportData.SportList[0].Medals.n_Silver} </td>
                        <td> {sportData.SportList[0].Medals.n_Bronze} </td>
                    </tr>
                    <tr>
                        <td> {sportData.SportList[1].Sport.c_Name} </td>
                        <td> {sportData.SportList[1].Medals.n_Total} </td>
                        <td> {sportData.SportList[1].Medals.n_Gold} </td>
                        <td> {sportData.SportList[1].Medals.n_Silver} </td>
                        <td> {sportData.SportList[1].Medals.n_Bronze} </td>
                    </tr>
                </table>

                <h3> Participants - {sportData.SportList[0].Sport.c_Name} </h3>

                <div className="participants">

                <SpeedTable data={sportData.SportList[0]}/>

                </div>


            </div>
        )
    }
}

const mapStatetoProps = ({ sportData }) => ({ sportData })

export default connect(mapStatetoProps)(appContainer)

