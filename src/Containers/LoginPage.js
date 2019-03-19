import React from "react";
import { connect } from "react-redux";
import { LOGGING_EMAIL, LOGGING_PASSWORD } from "../types"

// form here somewhere
const LoginPage = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(props.email, props.password)
    console.log("handleSubmit")
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        email: props.email,
        password: props.password})
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        console.log(props.history)
      }})
    //.then(console.log)
  }

  return(
    <div>
    <form>
      <label>email:
        <input type="text" name="email" onChange={e => props.logEmail(e.currentTarget.value)}/>
      </label>
      <label>password:
        <input type="password" name="password" onChange={e => props.logPassword(e.currentTarget.value)} />
      </label>
      <input type="submit" value="login" onClick={handleSubmit}/>
    </form>
    </div>
  )
}
// adding redux here:

const mapStateToProps = (state) => {
  return {email: state.email, password: state.password}
}

const mapDispatchToProps = (dispatch) => {
  return {
    logPassword: (password) => {dispatch({type: LOGGING_PASSWORD, payload: password})},
    logEmail: (email) => {dispatch({type: LOGGING_EMAIL, payload: email})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
