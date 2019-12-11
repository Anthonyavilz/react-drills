import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)        
    }

    handleUserChange = e => {
        this.setState({username: e.target.value})
    }

    handlePassChange = e => {
        this.setState({password: e.target.value})
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return(
            <div>
                <input placeholder='Username' type='text' value={this.state.name}  onChange={this.handleUserChange}></input>
                <input placeholder='Password' type='text' value={this.state.pass} onChange={this.handlePassChange}></input>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }

}

export default Login