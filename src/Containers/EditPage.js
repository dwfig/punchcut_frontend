import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { EDITING_TEXT, EDITING_HEADLINE } from "../types"

const saveArticleUrl = "http://localhost:3001/api/v1/articles"

const EditPage = (props) => {
  console.log(props)

  const handleSave = () => {
    console.log("clicked", props.currArticle)
    fetch(saveArticleUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        "text" : props.currArticle.text,
        "headline" : props.currArticle.headline,
        "posted" : props.currArticle.posted,
        "user_id" : this.props.currUser.id,
      })
    })
  }

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
        <div>Posted?</div>
        <input type="checkbox" value={props.currArticle.posted}/>
        <input type="button" value="save" onClick={()=>handleSave()}/>
      </>
  ) : (<Redirect to="/user" />)
  )
}

// TODO: make a post button instead of a checkbox
// <input type="button" value="post"/>

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
