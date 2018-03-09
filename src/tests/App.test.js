import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  const app = shallow(<App store={store}/>)

  it('renders with store as a wrapper', () => {
    expect(app).toExist
  })
})