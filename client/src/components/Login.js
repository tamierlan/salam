import React from 'react'
import { SalamConsumer } from '../context'

export default Signin => {

  return (
    <SalamConsumer>
    {(value) => {
    return (
      <div className='Sign'>
        <form className='form'>
          <h1>Signin</h1>
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

          <h3 onClick={value.loginSubmit}>
            Login
          </h3>
        </form>
      </div>
    )
    }}
    </SalamConsumer>
  )
}
