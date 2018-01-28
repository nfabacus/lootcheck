import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {

  state = {
    balance: undefined
  }

  updateBalance=e=>{
    this.setState({
      balance: parseInt(e.target.value, 10)
    })
  }

  onHandleDeposit=()=>this.props.deposit(this.state.balance)

  onHandleWithdraw=()=>this.props.withdraw(this.state.balance)

  render(){
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance}/>
        <button className="btn-deposit" onClick={this.onHandleDeposit}>Deposit</button>
        <button className="btn-withdraw" onClick={this.onHandleWithdraw}>Withdraw</button>
      </div>
    )
  }
}

export default connect( state=> { return {balance: state}}, {deposit, withdraw})(Wallet)