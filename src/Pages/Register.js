import React from 'react';
import Navp from '../components/navp';
import { Link } from 'react-router-dom'; // Import Lin

function Register() {
  return (
    <div>
    <Navp />
    <div className="hero is-fullheight is-flex is-justify-content-center is-align-items-center">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <img src="/logo.png" alt="Logo" className="login-logo" />
            <form className="is-horizontal">
              <div className="field">
                <br></br>
                <label className="label level-left">Nama</label>
                <div className="control has-icons-left">
                  <input className="input" type="text" placeholder="Enter Email Here" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label level-left">Email</label>
                <div className="control has-icons-left">
                  <input className="input level-left" type="email" placeholder="Enter Your email Here" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label level-left">Password</label>
                <div className="control has-icons-left">
                  <input className="input" type="password" placeholder="Enter Password Here" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </div>
              </div>
              <br></br>
              <div className="field">
                  <p className='is-size-7'>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
              <a href="#" className="card-footer-item button is-link mt-5">Register</a>
            </form>
          </div>
        </div>
        </div>
        <footer className="card-footer">
          
        </footer>
      </div>
    </div>
  );
}

export default Register;
