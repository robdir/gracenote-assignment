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
                <tr>
                    <td> {data.SilverMedalList[0].Participant.c_Participant}</td>
                    <td> {data.SilverMedalList[0].Event.c_Name} </td>
                    <td> {data.SilverMedalList[0].Gender.c_Short} </td>
                    <td> Silver </td>
                </tr>
                <tr>
                    <td> {data.SilverMedalList[1].Participant.c_Participant}</td>
                    <td> {data.SilverMedalList[1].Event.c_Name} </td>
                    <td> {data.SilverMedalList[1].Gender.c_Short} </td>
                    <td> Silver </td>
                </tr>
                <tr>
                    <td> {data.SilverMedalList[2].Participant.c_Participant}</td>
                    <td> {data.SilverMedalList[2].Event.c_Name} </td>
                    <td> {data.SilverMedalList[2].Gender.c_Short} </td>
                    <td> Silver </td>
                </tr>
                <tr>
                    <td> {data.SilverMedalList[3].Participant.c_Participant}</td>
                    <td> {data.SilverMedalList[3].Event.c_Name} </td>
                    <td> {data.SilverMedalList[3].Gender.c_Short} </td>
                    <td> Silver </td>
                </tr>
                <tr>
                    <td> {data.SilverMedalList[4].Participant.c_Participant}</td>
                    <td> {data.SilverMedalList[4].Event.c_Name} </td>
                    <td> {data.SilverMedalList[4].Gender.c_Short} </td>
                    <td> Silver </td>
                </tr>
                <tr>
                    <td> {data.SilverMedalList[5].Participant.c_Participant}</td>
                    <td> {data.SilverMedalList[5].Event.c_Name} </td>
                    <td> {data.SilverMedalList[5].Gender.c_Short} </td>
                    <td> Silver </td>
                </tr>
                <tr>
                    <td> {data.SilverMedalList[6].Participant.c_Participant}</td>
                    <td> {data.SilverMedalList[6].Event.c_Name} </td>
                    <td> {data.SilverMedalList[6].Gender.c_Short} </td>
                    <td> Silver </td>
                </tr>
                <tr>
                    <td> {data.BronzeMedalList[0].Participant.c_Participant}</td>
                    <td> {data.BronzeMedalList[0].Event.c_Name} </td>
                    <td> {data.BronzeMedalList[0].Gender.c_Short} </td>
                    <td> Bronze </td>
                </tr>
                <tr>
                    <td> {data.BronzeMedalList[1].Participant.c_Participant}</td>
                    <td> {data.BronzeMedalList[1].Event.c_Name} </td>
                    <td> {data.BronzeMedalList[1].Gender.c_Short} </td>
                    <td> Bronze </td>
                </tr>
                <tr>
                    <td> {data.BronzeMedalList[2].Participant.c_Participant}</td>
                    <td> {data.BronzeMedalList[2].Event.c_Name} </td>
                    <td> {data.BronzeMedalList[2].Gender.c_Short} </td>
                    <td> Bronze </td>
                </tr>
                <tr>
                    <td> {data.BronzeMedalList[3].Participant.c_Participant}</td>
                    <td> {data.BronzeMedalList[3].Event.c_Name} </td>
                    <td> {data.BronzeMedalList[3].Gender.c_Short} </td>
                    <td> Bronze </td>
                </tr>
                <tr>
                    <td> {data.BronzeMedalList[4].Participant.c_Participant}</td>
                    <td> {data.BronzeMedalList[4].Event.c_Name} </td>
                    <td> {data.BronzeMedalList[4].Gender.c_Short} </td>
                    <td> Bronze </td>
                </tr>
                <tr>
                    <td> {data.BronzeMedalList[5].Participant.c_Participant}</td>
                    <td> {data.BronzeMedalList[5].Event.c_Name} </td>
                    <td> {data.BronzeMedalList[5].Gender.c_Short} </td>
                    <td> Bronze </td>
                </tr>
                <tr>
                    <td> {data.BronzeMedalList[6].Participant.c_Participant}</td>
                    <td> {data.BronzeMedalList[6].Event.c_Name} </td>
                    <td> {data.BronzeMedalList[6].Gender.c_Short} </td>
                    <td> Bronze </td>
                </tr>
                <tr>
                    <td> {data.BronzeMedalList[7].Participant.c_Participant}</td>
                    <td> {data.BronzeMedalList[7].Event.c_Name} </td>
                    <td> {data.BronzeMedalList[7].Gender.c_Short} </td>
                    <td> Bronze </td>
                </tr>
            </table>
        )
    }
        
}

export default speedTable