import React, {Component} from 'react';
import { firebaseApp} from "../firebase";
import { Link } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signIn = () => {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error})
      })
  }
  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign up</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            style={{marginRight:'5%'}}
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            className="form-control"
            placeholder="password"
            type="password"
            style={{marginRight:'5%'}}
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button className="btn btn-primary" type="button"
                  onClick={this.signIn}
          >Sign in</button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Sign up instead</Link></div>
      </div>
    );
  }
}

export default SignIn;