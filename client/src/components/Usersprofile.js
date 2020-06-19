import React, { Component } from 'react'
import profilepic from '../image/zakirbek.jpeg'
import { Link, withRouter } from 'react-router-dom'
import ScrollToBottom from '../scroll';

export default function Usersprofile({users}) {
  return (
    <ScrollToBottom className='scroll'>
    {users.map(user => {
      return (
        <div key={user._id}>
          <Link to={`/home/${user._id}`} className='SingleList'>

            <img src={profilepic} alt='pic' />

            <div className='list'>
              <div className='name'>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
              </div>

              <div className='offline'>
                <h6>offline</h6>
              </div>
            </div>

          </Link>
        </div>
      )
    })}
    </ScrollToBottom>
  )
}
