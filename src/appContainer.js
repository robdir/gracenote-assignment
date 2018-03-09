import React, { PureComponent } from 'react';
import './styles/appContainer.css'
import {connect} from 'react-redux'

class appContainer extends PureComponent {
    render() {
        return (
            <p> Hi </p>
        )
    }
}

const mapStatetoProps = ({ sportData }) => ({ sportData })

export default connect(mapStatetoProps)(appContainer)