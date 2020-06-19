import React, { Component } from 'react'
import axios from 'axios'
import loadingGif from '../image/loading.gif';
import UserHardDet from './UserHardDet'
// import zakirbek from '../image/zakirbek.jpeg'
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
      photo: '',

      first: '',
      last: '',
      mail: '',

      button: 'open',
      load: 'close',
      saved: 'close',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changePhoto = this.changePhoto.bind(this)
  }


  handleChange = e => {this.setState({[e.target.name]: e.target.value, first: '', last: '', mail: ''})}

  changePhoto = file => {
    let data = new FormData()
    data.append('categoryImage', file[0])
    data.append('name', file.name)
    this.setState({ photo: data })
    console.log(this.state.photo)
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
      const {id, first_name, last_name, email, phone_number, age, gender, ethnicity, marital_status } = this.state;
      

      await axios.post('/users/userupdate/'+id, { first_name, last_name, email, phone_number, age, gender, ethnicity, marital_status })
      .then(res => {
        if (res.data === 'updated') {
          let x = setInterval(() => {
            this.setState({load: 'close', saved: 'open'})
            this.w()
          }, 2000)
          console.log(this.state.photo)
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
      photo: decoded.file
    })
    console.log(this.state.photo)
  }





  render() {

    return (
      <div className='userprofile'>
        <input type='file' onChange={this.changePhoto} />
        <div className='userprofile-pic'>
          <MdAddAPhoto className='addphoto' />
          <img src={this.state.photo} alt='photo' />
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
