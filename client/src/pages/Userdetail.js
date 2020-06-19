import React, { Component } from 'react';
import { SalamContext } from '../context';
import DetailsNavbar from '../components/DetailsNavbar'
import zakirbek from '../image/zakirbek.jpeg'

export default class SingleTruck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params._id,
    };
  }
  static contextType = SalamContext


  render() {
    const { getUser } = this.context;
    const user = getUser(this.state.id)

    const {
      first_name,
      last_name,
      email,
      phone_number,
      age,
      ethnicity,
      marital_status,
      gender,
      file
    } = user

    return (
      <>
        <DetailsNavbar />
        <div className='top-back' />
        <div className='Userdetail'>

          <img src={zakirbek} alt='pic' />
          <h4>{first_name ? first_name : ''}</h4>
          <h4>{last_name ? last_name : ''}</h4>
          <h4>{email ? email : ''}</h4>
          <h4>{phone_number ? phone_number : ''}</h4>
          <h4>{age ? age : ''}</h4>
          <h4>{ethnicity ? ethnicity : ''}</h4>
          <h4>{gender ? gender : ''}</h4>
          <h4>{marital_status ? marital_status : ''}</h4>

        </div>
      </>
    )
  }




}
