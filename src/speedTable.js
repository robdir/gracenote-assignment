import React, { PureComponent } from 'react';


class speedTable extends PureComponent {
    render() {
        const { data } = this.props
        
        return (
            <table className="participants_breakdown">
            <tr>
                <th> Participant Name / Team </th>
                <th> Event </th>
                <th> Gender </th>
                <th> Medal Type </th>
            </tr>

            <tr>    
                <td> {data.GoldMedalList[0].Participant.c_Participant}</td>
                <td> {data.GoldMedalList[0].Event.c_Name} </td>
                <td> {data.GoldMedalList[0].Gender.c_Short} </td>
                <td> Gold </td>
            </tr>
            <tr>
                <td> {data.GoldMedalList[1].Participant.c_Participant}</td>
                <td> {data.GoldMedalList[1].Event.c_Name} </td>
                <td> {data.GoldMedalList[1].Gender.c_Short} </td>
                <td> Gold </td>
            </tr>
            <tr>
                <td> {data.GoldMedalList[2].Participant.c_Participant}</td>
                <td> {data.GoldMedalList[2].Event.c_Name} </td>
                <td> {data.GoldMedalList[2].Gender.c_Short} </td>
                <td> Gold </td>
            </tr>
            <tr>
                <td> {data.GoldMedalList[3].Participant.c_Participant}</td>
                <td> {data.GoldMedalList[3].Event.c_Name} </td>
                <td> {data.GoldMedalList[3].Gender.c_Short} </td>
                <td> Gold </td>
            </tr>
            <tr>
                <td> {data.GoldMedalList[4].Participant.c_Participant}</td>
                <td> {data.GoldMedalList[4].Event.c_Name} </td>
                <td> {data.GoldMedalList[4].Gender.c_Short} </td>
                <td> Gold </td>
            </tr>
            <tr>
                <td> {data.GoldMedalList[5].Participant.c_Participant}</td>
                <td> {data.GoldMedalList[5].Event.c_Name} </td>
                <td> {data.GoldMedalList[5].Gender.c_Short} </td>
                <td> Gold </td>
            </tr>
            <tr>
                <td> {data.GoldMedalList[6].Participant.c_Participant}</td>
                <td> {data.GoldMedalList[6].Event.c_Name} </td>
                <td> {data.GoldMedalList[6].Gender.c_Short} </td>
                <td> Gold </td>
            </tr>
            <tr>
                <td> {data.GoldMedalList[7].Participant.c_Participant}</td>
                <td> {data.GoldMedalList[7].Event.c_Name} </td>
                <td> {data.GoldMedalList[7].Gender.c_Short} </td>
                <td> Gold </td>
            </tr>
            </table>
        )
    }
        
}

export default speedTable