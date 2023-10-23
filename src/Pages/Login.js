import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Navp from '../components/navp';

function Login() {
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
                <label className="label level-left">Email</label>
                <div className="control has-icons-left">
                  <input className="input" type="email" placeholder="Enter Email Here" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
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
                <br></br>
                <div className="field">
                  <p className='is-size-7'>Doesn't have an account? <Link to="/register">Register here</Link></p>
                </div>
              </div>
              <Link to="#" className="card-footer-item button is-link mt-5">Login</Link> {/* Menggunakan Link untuk pindah ke halaman Register */}
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

export default Login;
