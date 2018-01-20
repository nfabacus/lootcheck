import balanceReducer from './balance'
import * as constants from '../actions/constants'

let balance
describe('balanceReducer', ()=>{
  beforeEach(()=>{
    balance = 10
  })

  it('sets a balance', ()=>{

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance})).toEqual(balance)
  })

  it('deposits an amount to the balance', ()=>{
    const deposit = 5
    expect(balanceReducer(balance, { type: constants.DEPOSIT, deposit})).toEqual(balance+deposit)
  })

  it('withdraw an amount from the balance', ()=>{
    const withdrawal = 3
    expect(balanceReducer(balance, { type: constants.WITHDRAW, withdrawal})).toEqual(balance-withdrawal)
  })
})