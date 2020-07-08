import React, { Component } from 'react'
import axios from 'axios'

const SalamContext = React.createContext()

class SalamProvider extends Component {
  constructor() {
    super()

    this.state = {
     //  sign toggles
      sign_up: 'close',
      sign_in: 'close',
      error: 'close',
      email_taken: 'close',
      success_signup: 'close',
      user_notexist: 'close',
      loading: 'close',

      first_name: '',
      last_name: '',
      email: '',
      password: '',

      // validation
      first_red: '',
      last_red: '',
      email_red: '',
      pass_red: '',

      // users Data
      users: [],

      // profile display
      users_profile: 'full-profile',
      my_profile: 'close'

    }
    this.registerSubmit = this.registerSubmit.bind(this)
    this.loginSubmit = this.loginSubmit.bind(this)

  }



  // init -state
  init_state = () =>
    this.setState({
      email_taken: 'close',
      user_notexist: 'close',
      error: 'close'
    })
  // profile toggle
  profile_toggle = () => {
    if (this.state.my_profile === 'close') {
      this.setState({my_profile: 'my-profile', users_profile: 'users-profile'})
    } else {
      this.setState({my_profile: 'close', users_profile: 'full-profile'})
    }
  }


  // sign toggles
  register = () => this.setState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    email_taken: 'close',
    error: 'close',
    user_notexist: 'close',
    sign_in: 'close',
    loading: 'close',
    sign_up: 'open',
    first_red: '',
    last_red: '',
    email_red: '',
    pass_red: ''
  })

  login = () => this.setState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    email_taken: 'close',
    error: 'close',
    user_notexist: 'close',
    sign_up: 'close',
    loading: 'close',
    sign_in: 'open',
    first_red: '',
    last_red: '',
    email_red: '',
    pass_red: ''
  })



  // signin signup inputs
  first_text = (e) => this.setState({first_name: e.target.value, first_red: ''})
  last_text = (e) => this.setState({last_name: e.target.value, last_red: ''})
  email_text = (e) => this.setState({email: e.target.value, email_red: ''})
  pass_text = (e) => this.setState({password: e.target.value, pass_red: ''})



  componentDidMount() {
    this.getData()
    if (localStorage === 'usertoken') {
    }
  }



  async getData(e) {
    await axios.get('users/').then(res => {
      this.setState(() => {
        return {users: res.data}
      })
    })
  }



  getUser = id => {
    let tempUser = [...this.state.users]
    const userfound = tempUser.find(user => user._id === id)
    return userfound;
  }









  // REGISTER LOGIN
  async signIn(e) {
    const { email, password } = this.state;
    axios.post('/users/login', { email, password })
    .then(res => {
      localStorage.setItem('usertoken', res.data)
      this.setState({loading: 'close', success_signup: 'open'})
      setTimeout(out, 3000);
      function out() {
        return window.location = '/home'
      }
    })
  }

  async registerSubmit(e) {
    e.preventDefault()
    if (this.state.first_name === '') {
      this.setState({first_red: 'red-border'})
    } else if (this.state.last_name === '') {
      this.setState({last_red: 'red-border'})
    } else if (this.state.email === '') {
      this.setState({email_red: 'red-border'})
    } else if (!this.state.email.includes('@')) {
      this.setState({email_red: 'red-border'})
    } else if (this.state.password === '') {
      this.setState({pass_red: 'red-border'})
    } else {
      this.setState({sign_up: 'close', loading: 'open'})
      const { first_name, last_name, email, password } = this.state;
      await axios.post('/users/register', { first_name, last_name, email, password })
      .then(res => {
        if (res) {
          if (res.data.user) {
            this.signIn()
          } else {
            this.setState({loading: 'close', email_taken: 'open'})
          }
        } else {
          this.setState({loading: 'close', error: 'open'})
        }
      })
    }
  }

  // LOGIN
  async loginSubmit(e) {
    e.preventDefault()
    if (this.state.email === '') {
      this.setState({email_red: 'red-border'})
    } else if (this.state.password === '') {
      this.setState({pass_red: 'red-border'})
    } else {
      this.setState({sign_in: 'close', loading: 'open'})
      const { email, password } = this.state;
      axios.post('/users/login', { email, password })
      .then(res => {
        if (res) {
          if (res.data.error) {
            this.setState({loading: 'close', user_notexist: 'open'})
          } else {

            localStorage.setItem('usertoken', res.data)
            return window.location = '/home'

          }
        } else {this.setState({loading: 'close', error: 'open'})}
      })
    }
  }



  render() {
    return(
      <SalamContext.Provider value={{
        ...this.state,
        init_state: this.init_state,

        first_text: this.first_text,
        last_text: this.last_text,
        email_text: this.email_text,
        pass_text: this.pass_text,
        registerSubmit: this.registerSubmit,
        loginSubmit: this.loginSubmit,
    //  toggle
        register: this.register,
        login: this.login,
        profile_toggle: this.profile_toggle,
    //  Userdetail
        getUser: this.getUser
      }}>
        {this.props.children}
      </SalamContext.Provider>
    )
  }
}

const SalamConsumer = SalamContext.Consumer

export function withSalamConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <SalamConsumer>
        {value => <Component {...props} context={value} />}
      </SalamConsumer>
    )
  }
}

export { SalamProvider, SalamConsumer, SalamContext }
