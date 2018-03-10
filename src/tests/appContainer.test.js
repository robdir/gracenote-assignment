import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';
import sinon from 'sinon'
import AppContainer from '../appContainer';
import medalData from '../fixtures/GetMedalTableNOCDetail_Season.json'

Enzyme.configure({ adapter: new Adapter() })

describe('<AppContainer />', () => {
    const container = shallow(<AppContainer store={store} data={medalData}/>)

    it('renders with store as a wrapper', () => {
        expect(container).toExist
    })

    it('is passed medalData as props onload', () => {
        expect(container.props().data).toBeDefined
        expect(container.props().data).toEqual(medalData)
    })
})
