import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,google } from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
    return (
        <div>
            <form className = "singUp-form">
                <h3 className = "text-center">Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                {/* <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div> */}

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-warning btn-block">  Sign Up</button>
                <button type="submit" className="btn btn-secondary btn-block">  Sign Up With Google</button>
                <button type="submit" className="btn btn-secondary btn-block"><FacebookIcon/> Sign Up With Facebook</button>

                <p className="forgot-password text-right" >
                    Already registered <Link to = "/logIn">sign in?
                    </Link>
                    
                </p>
            </form>
        </div>
    );
};

export default SignUp;