import React, {useState, useEffect} from 'react';
import TabEmp from './navigations/TabEmp'
import firebase from './firebase'

import Login from './screens/LoginScreen/Login'
import TabBoss from './navigations/TabBoss';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [info, setInfo] = useState({ });

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  
  const handleLogin = () => {
    clearErrors();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignup = () => {
    clearErrors();
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const authListener = () => {
    firebase
    .auth()
    .onAuthStateChanged(user => {
      if(user){
        setUser(user);
        clearInputs();
      }
      else 
        setUser("");
    })
  }

  useEffect(() => {
    authListener();
  }, []);

  return (
    user ? (
      user.providerData[0].email === 'admin@gmail.com' ?
      <TabBoss user={user.providerData[0]} info={info} setInfo={setInfo}/> : <TabEmp user={user.providerData[0]} info={info} setInfo={setInfo}/>
    ) : (
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
    )
  )
}

export default () => {
  return <App />;
}