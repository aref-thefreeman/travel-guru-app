import React , { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LogIn.css'
import {useHistory, useLocation } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';

//From Fire Auth: Lecture
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function LogIn() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };


  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false)

  const [user,setUser] = useState({
    isLoggedIn : false,
    name : '' ,
    email : '' ,
    password : '' ,
    photo : '' ,
    error : '' ,
    success : false
  })

  const handleGoogleSignIn = () =>{
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(res => {
      const {displayName,email,photoURL} = res.user
      const signedInUser = {
        isLoggedIn : true,
        name : displayName ,
        email : email ,
        photo : photoURL 
      }
      setUser(signedInUser); 
      setLoggedInUser(signedInUser);  
      history.replace(from);
    })
  }

  const handleGoogleSignOut = () =>{
    firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isLoggedIn : false,
        name : '' ,
        email : '' ,
        photo : '' ,
        
      }
      setUser(signOutUser)
      setLoggedInUser(signOutUser);  
    })
    .catch(e => console.log(e))   
    
  }
  const handelBlur = (e) =>{
    let isFieldValid = true 
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
      
    }
    if(e.target.name === 'password'){
      const passwordLength = e.target.value.length > 6
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFieldValid = passwordHasNumber && passwordLength
    }

    if(isFieldValid){
      const newUserInfo = {...user}
      //const newUserInfos = user    //problem
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
      // setLoggedInUser(newUserInfo)
    }
  }

  const handleSubmit= (e) =>{
    //console.log(user.email, user.password);
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res =>{
        const newUserInfo = {...user}
        newUserInfo.error = ''
        newUserInfo.success = true 
        setUser(newUserInfo)        
        updateUserInfo(user.name)
        setLoggedInUser(newUserInfo); 
        history.replace(from); 
      }) 
      .catch(error => {
        // Handle Errors here.
        const newUserInfo = {...user}
        newUserInfo.error = error.message
        newUserInfo.success = false
        setUser(newUserInfo)
        
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res =>{
        const newUserInfo = {...user}
        newUserInfo.error = ''
        newUserInfo.success = true 
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);

        //next visited page
        history.replace(from);
        console.log('SignIn User Info',res.user);
      })
      .catch(function(error) {
       // Handle Errors here.
       const newUserInfo = {...user}
       newUserInfo.error = error.message
       newUserInfo.success = false
       setUser(newUserInfo)
       setLoggedInUser(newUserInfo); 
      });
    }
    e.preventDefault()
  }

  const updateUserInfo = name =>{
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name      
    }).then(function() {
      console.log('User name update successfully');
    }).catch(function(error) {
      console.log(error);
    });
  }
  const handleFacebookSignIn = () =>{
    firebase.auth().signInWithPopup(facebookAuthProvider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      // var user = result.user;


      const {displayName,email,photoURL} = result.user
      const signedInUser = {
        isLoggedIn : true,
        name : displayName ,
        email : "anyone@gamil.com",
        photo: "",
        
      }
      setUser(signedInUser); 
      setLoggedInUser(signedInUser);  
      history.replace(from);




      console.log(user);
      history.replace(from); 

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log("ERR:", errorCode)
      var errorMessage = error.message;
      console.log("Err msg:", errorMessage)
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  return (
    <div style ={{textAlign : "center"}} className="logInForm">
      
      
      <div className = "logInForm-inner">
      
      

      <form onSubmit = {handleSubmit}>

        {newUser && <input name="name" type="text" onBlur={handelBlur} placeholder="Enter Name"></input>}<br/>
        <input type="email" required name="email" onBlur={handelBlur} placeholder="Enter email" ></input> <br/>
        
        <input type="password" name="password" onBlur={handelBlur} placeholder="Enter password"></input> <br/>
        <input style = {{width: "180px"}} type="submit" value={newUser ? 'SignUp' : 'SignIn'} onClick={handleSubmit} ></input>
        <br/>
      </form>
      <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""></input>
      <label style = {{marginTop: "5px"}} htmlFor="newUser">New User SignIn</label> <br/>
      {
        user.isLoggedIn ? <button style = {{width: "400px", marginTop: "40px"}} onClick={handleGoogleSignOut}>Sign Out</button>
                        :  <button style = {{width: "400px", marginTop: "40px"}} onClick={handleGoogleSignIn}>Sign In with Google</button>
      }
      <br/>
      <button style = {{width: "400px"}} onClick={handleFacebookSignIn}><FacebookIcon/>Sign in with Facebook</button>
    <p style={{color: 'white'}}>{user.error}</p>
    {user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged in'} Successfully</p>}
      </div>
    </div>
  );
}

export default LogIn;

// const LogIn = () => {
//     return (
//         <div>
               
//                <form className= "form">
//                 <h3 className= "text-center">Log In</h3>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email" />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>

//                 <div className="form-group">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                     </div>
//                 </div>

//                 <button type="submit" className="btn btn-warning btn-block">LogIn</button>
//                 {/* <p className="forgot-password text-right">
//                     Forgot <a href="#">password?</a>
//                 </p> */}
//             </form>
        
//          </div>
//     );
// };

// export default LogIn;