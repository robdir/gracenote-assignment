import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Container from './appContainer'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  const app = shallow(<App/>)
  const container = shallow(<Container/>)

  it('is rendered within a div tag', () => {
    expect(app).toHaveTagName('div')
  })
})