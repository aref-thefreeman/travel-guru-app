import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,google } from '@fortawesome/free-solid-svg-icons'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../LogIn/firebase.config';


const SignUp = () => {
    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photo: ""      
    })

    const handleGoogleSignIn = () =>{

    console.log("googleSignInClicked");
    //Creating an instance of the Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    //Authenticate with Firebase using the Google provider object
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User details: ",user);
        const {displayName, photoURL, email} = user;
        console.log("Email Id: ",email);

        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email:email,
            photo: photoURL

        }

        setUser(signedInUser);
        console.log("Set User:",setUser)
        
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
    }




    const handleGoogleSignOut = () =>{

        firebase.auth().signOut()
        .then(res => {

            const signedOutUser = {
                isSignedIn: false,
                name: "",
                email: "",
                photo: "" 
            }

            setUser(signedOutUser);



            
          })
          .catch(error =>  {
            console.log(error)
          });

    }

    const handleSubmit = () => {
        
    }


    return (
        <div>
            <form onSubmit= {handleSubmit} className = "singUp-form">
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

                <input type="submit" className="btn btn-warning btn-block" value = "Submit"/>
                
                

                <p className="forgot-password text-right" >
                    Already registered <Link to = "/logIn">sign in?
                    </Link>
                    
                </p>
            </form>

            {
                user.isSignedIn && <div>
                    <h4> Hello! Welcome, `${user.name}!`</h4>
                    <p>Email: {user.email}</p>
                
                </div>
            }

            {
                user.isSignedIn ? <button onClick = {handleGoogleSignOut}  className="btn btn-secondary btn-block">  Sign Out</button> : <button onClick = {handleGoogleSignIn}  className="btn btn-secondary btn-block">  Sign Up With Google</button>
            }

            <button  className="btn btn-secondary btn-block"><FacebookIcon/> Sign Up With Facebook</button>

        </div>
    );
};

export default SignUp;