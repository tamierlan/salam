import React from 'react'

export default EmailTaken => {
  return (
    <div className='form'>
      <div className='top-back' />
      <div className='Sign-result'>
        <h1>Sorry!</h1>
        <h3>
          Email is already taken<br/>try again different email
        </h3>
      </div>
    </div>
  )
}
