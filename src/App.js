import React, {useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import {auth} from "./firebase"
import Chat from './Chat';
import { selectUser } from './features/userSlice'
import Login from './Login';
import {login,logout} from './features/userSlice'


function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //auth user stores aal info about user from email
      //if user is logged in
      if(authUser){
        console.log(authUser);
        //push to redux store
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName

        })
        )
      }
      //when user logs out
      else{
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="app">
    {user ? (
      <>
        {/*Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
     </>): (
       <Login />
     )}
     
     
    </div>
  );
}

export default App;
