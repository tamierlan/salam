import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import EmailTaken from '../components/EmailTaken'
import SuccessSignup from '../components/SuccessSignup'
import UserNotExist from '../components/UserNotExist'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { SalamConsumer } from '../context'
import Navbar from '../components/Navbar'

export default Sign => {
  return (
    <SalamConsumer>

    {(value) => {
    return (
      <div className='back-holder' onClick={value.init_state}>
        <Navbar />

        <div className={value.sign_up}> <Register /> </div>

        <div className={value.sign_in}> <Login /> </div>

        <div className={value.success_signup}> <SuccessSignup /> </div>

        <div className={value.email_taken}> <EmailTaken /> </div>

        <div className={value.user_notexist}> <UserNotExist /> </div>

        <div className={value.error}> <Error /> </div>

        <div className={value.loading}><Loading /></div>

      </div>
    )
    }}
    </SalamConsumer>
  )
}
