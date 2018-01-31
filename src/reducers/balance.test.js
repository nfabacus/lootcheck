import balanceReducer from './balance'
import balanceReducer2 from './balance'
import * as constants from '../actions/constants'


describe('balanceReducer', ()=>{

  describe('When initialising', ()=>{
    const balance = 10

    it('sets a balance', ()=>{
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance})).toEqual(balance)
    })
  
    describe('then re-initialising', ()=>{
      it('reads the balance from cookies', ()=>{
        expect(balanceReducer2(undefined, {})).toEqual(balance)
      })
    })
  })


  it('deposits an amount to the balance', ()=>{
    const initialState = 5
    const deposit = 10
    expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit})).toEqual(initialState+deposit)
  })

  it('withdraw an amount from the balance', ()=>{
    const initialState = 10
    const withdrawal = 6
    expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdrawal})).toEqual(initialState-withdrawal)
  })
})