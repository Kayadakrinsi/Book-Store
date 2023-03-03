import React, { Component } from 'react'
import '../LoginForm.css'

export class LoginForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:'',
       email:'',
       password:''
    }
  }

  changeUsernameHandler=(event)=>{
    this.setState({
      username:event.target.value
    })
  }

  changeEmailHandler=(event)=>{
    this.setState({
      email:event.target.value
    })
  }

  changePasswordHandler=(event)=>{
    this.setState({
      password:event.target.value
    })
  }

  handleSubmit=event=>{
    alert(`${this.state.username} ${this.state.email} ${this.state.password}`)
  }
  

  render() {
    return (
      <>
        <div className='container'>
          <form>
            <label htmlFor='username' className='label'>User Name : </label>
            <input type='text' id='username' value={this.state.username} onChange={this.changeUsernameHandler} className='input'/>
            <br />
            <label htmlFor='email' className='label'>Email : </label>
            <input type='email' id='email' value={this.state.email} onChange={this.changeEmailHandler} className='input'/>
            <br />
            <label htmlFor='password' className='label'>Password : </label>
            <input type='password' id='password' value={this.state.password} onChange={this.changePasswordHandler} className='input'/>
            <br />
            <div className='submit'>
              <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
