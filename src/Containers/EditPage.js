import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { EDITING_TEXT, EDITING_HEADLINE } from "../types"


const EditPage = (props) => {
  console.log(props)
  return( props.currArticle ? (
      <>
        <div>Title:</div>
        <textarea
          value={props.currArticle.headline}
          onChange={(event) => props.editHeadline(event.target.value)} />
        <br />
        <div>Body Text:</div>
        <textarea
          value={props.currArticle.text}
          onChange={(event) => props.editText(event.target.value)} />
        <br />
        <input type="button" value="save" /><input type="button" value="post"/>
      </>
  ) : (<Redirect to="/user" />)
  )
}

const mapStateToProps = (state) => {
  return {currArticle: state.currArticle}
}

// onChange on the textareas
// hooked up to a dispatch to the store
// that spreads props.currArticle with new props.currArticle.text
const mapDispatchToProps = (dispatch) =>{
  return {
    editText: (text) =>{dispatch({type: EDITING_TEXT, payload: text})},
    editHeadline: (headline) => {dispatch({type: EDITING_HEADLINE, payload: headline})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)

// okay we're somewhere
// these now need to be patching to the back end

// and then we need a button for a new article that sets currArticle to
// an object with headline/text/etc
