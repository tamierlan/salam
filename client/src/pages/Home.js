import React from 'react'
import Profile from '../components/Profile'
import Usersprofile from '../components/Usersprofile'
import { SalamConsumer } from '../context'
import Navbar from '../components/Navbar'

export default Home => {
  return(
  <SalamConsumer>

    {(value) => {

      return (
        <>
        <Navbar />
        <div className='both-profile'>
          <div className={value.my_profile}>
            <Profile />
          </div>

          <div className={value.users_profile}>
            <Usersprofile users={value.users} />
          </div>
        </div>
        </>
      )
    }}
  </SalamConsumer>
  )
}
