import React, {Component} from 'react';
import { firebaseApp} from "../firebase";
import { Link } from 'react-router-dom';

class SignUp extends Component {
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
  signUp = () => {
    const { email, password } = this.state;
   firebaseApp.auth().createUserWithEmailAndPassword(email, password)
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
            onClick={this.signUp}
          >Sign up</button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user? Sign in instead </Link> </div>
      </div>
    );
  }
}

export default SignUp;