import React from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from "react-redux";
// import { Redirect } from "react-router";


const RedirectPage = () => {
  // if (props.currUser){
  //   return(
  //     <Redirect to="/user" />
  // )}else{
  return (
    <div>You must <NavLink to="/admin">login</NavLink> to see this page.</div>
  )
  // }
}

export default RedirectPage
//
// const mapStateToProps = (state) =>{
//   return {currUser : state.currUser}
// }
//
// export default connect(mapStateToProps)(RedirectPage)
