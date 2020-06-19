import React, { Component } from 'react'
import { SalamConsumer } from '../context'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }

  render() {
    return (
    <SalamConsumer>
      {(value) => {
        if (localStorage.usertoken) {
          return (
            <nav className='navbar'>
              <div className='bir'>
                <h2>Salam</h2>
              </div>
              <div className='eki' />
              <div className='uch'>
                <h4 onClick={value.profile_toggle}>profile</h4>
                <h4 onClick={this.logOut.bind(this)}>logout</h4>
              </div>
            </nav>
          )
        } else {
          return (
            <nav className='navbar'>
              <div className='bir'>
                <h2>Salam</h2>
              </div>
              <div className='eki' />
              <div className='uch'>
                <h4 onClick={value.login}>login</h4>
                <h4 onClick={value.register}>register</h4>
              </div>
            </nav>
          )
        }
      }}
    </SalamConsumer>
    )
  }
}
export default withRouter(Navbar)
