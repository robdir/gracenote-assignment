import sportData from '../reducers/sportData';
import medalData from '../fixtures/GetMedalTableNOCDetail_Season.json'

describe('reducer', () => {
    const reducer = sportData
    const initialState = medalData

it ('returns the medal data as initial state', () => {
    expect(reducer()).toEqual(initialState)
    })
})