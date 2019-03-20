import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";


const EditPage = (props) => {
  console.log(props)
  return( props.currArticle ? (
        <div>{props.currArticle.text}</div>
  ) : (<Redirect to="/user" />)
  )
}

const mapStateToProps = (state) => {
  return {currArticle: state.currArticle}
}

export default connect(mapStateToProps)(EditPage)
