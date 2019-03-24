import React from "react";
import { connect } from "react-redux";
import { LOGGING_EMAIL, LOGGING_PASSWORD, SETTING_USER } from "../types"
import { Redirect } from "react-router";

// form here somewhere
const LoginPage = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email: props.email,
        password: props.password
      })
    })
    .then(res => res.json())
    .then(response => {
      console.log("HELLO", response)
      if (response.errors){
        alert(response.errors)
      } else {
        // props.history.push("/user")
        props.setUser(response)
        props.logEmail("")
        props.logPassword("")
      }})
  }

  // console.log(props.currUser)
  return(
    props.currUser ? (
      <Redirect to="/user"/>
    ) : (
   <div>
    <form onSubmit={handleSubmit}>
      <label>email:
        <input type="text" name="email" onChange={e => props.logEmail(e.currentTarget.value)}/>
      </label>
      <label>password:
        <input type="password" name="password" onChange={e => props.logPassword(e.currentTarget.value)} />
      </label>
      <input type="submit" value="login"/>
    </form>
    </div>
  ))
}
// adding redux here:

const mapStateToProps = (state) => {
  // console.log("state:", state)
  return {email: state.email, password: state.password, currUser: state.currUser}
}

const mapDispatchToProps = (dispatch) => {
  return {
    logPassword: (password) => {dispatch({type: LOGGING_PASSWORD, payload: password})},
    logEmail: (email) => {dispatch({type: LOGGING_EMAIL, payload: email})},
    setUser: (user) => {dispatch({type: SETTING_USER, payload: user})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
