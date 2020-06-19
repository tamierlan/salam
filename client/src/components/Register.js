import React from 'react'
import { SalamConsumer } from '../context'

export default Register => {

  return (
    <SalamConsumer>
    {(value) => {
    return (
      <div className='Sign'>
        <form className='form'>
          <h1>Register</h1>
          <p className={value.first_red}>
            <input
              placeholder='first name'
              value={value.first_name}
              onChange={value.first_text} />
          </p>
          <p className={value.last_red}>
            <input
               placeholder='last name'
               value={value.last_name}
               onChange={value.last_text} />
          </p>
          <p className={value.email_red}>
            <input
              placeholder='email'
              value={value.email}
              onChange={value.email_text} />
          </p>
          <p className={value.pass_red}>
            <input
              placeholder='password'
              value={value.password}
              onChange={value.pass_text} />
          </p>

          <h3 onClick={value.registerSubmit}>
            Sign Up
          </h3>
        </form>
      </div>
    )
    }}
    </SalamConsumer>
  )
}
