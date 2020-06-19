import React, { Component } from 'react'
import { SalamConsumer } from '../context'
import { Link, withRouter } from 'react-router-dom'

class DetailsNavbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }

  render() {
    return (
    <SalamConsumer>
      {(value) => {
        return (
          <nav className='navbar'>

            <div className='bir'>
              <h2>Salam</h2>
            </div>

            <div className='eki' />

            <div className='uch'>
        
              <Link to={`/home`}>
                <h4>home</h4>
              </Link>

              <h4 onClick={this.logOut.bind(this)}>logout</h4>

            </div>
          </nav>
        )
      }}
    </SalamConsumer>
    )
  }
}
export default withRouter(DetailsNavbar)
