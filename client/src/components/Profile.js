import React, { Component } from 'react'
import axios from 'axios'
import loadingGif from '../image/loading.gif';
import UserHardDet from './UserHardDet'
import avatar from '../image/avatar.jpeg'
import jwt_decode from 'jwt-decode'
import { MdAddAPhoto } from 'react-icons/md'
import Gender from './Gender'
import Ethnicity from './Ethnicity'
import Marital_status from './Marital_status'


export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      age: '',
      gender: '',
      ethnicity: '',
      marital_status: '',
      image: '',

      first: '',
      last: '',
      mail: '',

      button: 'open',
      load: 'close',
      saved: 'close',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = e => {this.setState({[e.target.name]: e.target.value, first: '', last: '', mail: ''})}

  upload = ({ target: { files } }) => {
    let data = new FormData()
    data.append('categoryImage', files[0])
    data.append('name', files[0].name)
    axios.post('users/category', data)
    .then(res => {
      this.setState({
        image: res.data.category.image
      })
      console.log(res.data.category)
    })
  }




  w = e => setInterval(() => {this.setState({saved: 'close', button: 'open'})}, 2000)
  async handleSubmit(e) {
    e.preventDefault()
    if (this.state.first_name === '') {
      this.setState({first: 'red-text'})
    } else if (this.state.last_name === '') {
      this.setState({last: 'red-text'})
    } else if (this.state.email === '') {
      this.setState({mail: 'red-text'})
    } else {
      this.setState({button: 'close', load: 'open'})
      const {id, first_name, last_name, email, phone_number, age, gender, ethnicity, marital_status, image } = this.state;

      await axios.post('/users/userupdate/'+id, { first_name, last_name, email, phone_number, age, gender, ethnicity, marital_status, image })
      .then(res => {
        if (res.data === 'updated') {
          let x = setInterval(() => {
            this.setState({load: 'close', saved: 'open'})
            this.w()
          }, 2000)
        }
      })
    }
  }



  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      id: decoded._id,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      phone_number: decoded.phone_number,
      age: decoded.age,
      gender: decoded.gender,
      ethnicity: decoded.ethnicity,
      marital_status: decoded.marital_status,
      image: decoded.image
    })
  }





  render() {

    return (
      <div className='userprofile'>

        <input onChange={this.upload} type='file' id='file' />
        <div className='userprofile-pic'>
          <label for='file'>
            <MdAddAPhoto for='file' className='addphoto' />
            <img for='file' src={this.state.image ? this.state.image : avatar} alt='photo' />
          </label>
        </div>



        <div className='user-details'>

          <UserHardDet />

          <div className='user-input-det'>
            <p className={this.state.first}><input
                placeholder='First Name'
                name='first_name'
                value={this.state.first_name}
                onChange={this.handleChange} />
            </p>
            <p className={this.state.last}><input
                placeholder='Last Name'
                name='last_name'
                value={this.state.last_name}
                onChange={this.handleChange} />
            </p>
            <p className={this.state.mail}><input
                placeholder='Email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange} />
            </p>
            <p><input
                placeholder='Phone Number'
                name='phone_number'
                value={this.state.phone_number}
                onChange={this.handleChange} />
            </p>
            <p><input
                placeholder='Age'
                name='age'
                value={this.state.age}
                onChange={this.handleChange} />
            </p>

            <Gender gender={this.state.gender} handleChange={this.handleChange} />

            <Ethnicity ethnicity={this.state.ethnicity} handleChange={this.handleChange} />

            <Marital_status marital_status={this.state.marital_status} handleChange={this.handleChange} />

          </div>
        </div>

        <div className={this.state.load}>
          <img src={loadingGif} alt="load" />
        </div>

        <div className={this.state.saved}>
          <button>Saved!</button>
        </div>

        <div className={this.state.button}>
          <button onClick={this.handleSubmit}>Save</button>
        </div>

      </div>
    )
  }
}
