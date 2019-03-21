import React from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { EDITING_TEXT, EDITING_HEADLINE , POSTING_ARTICLE } from "../types"

const saveArticleUrl = (id) => {return `http://localhost:3001/api/v1/articles/${id}`}

const EditPage = (props) => {

  const handleSave = () => {
    console.log("clicked", props.currArticle.posted)
    fetch(saveArticleUrl(props.currArticle.id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        "text" : props.currArticle.text,
        "headline" : props.currArticle.headline,
        "posted" : props.currArticle.posted,
      })
    })
    .then(a => a.json())
    .then(pars => console.log(pars))
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
        <input
          type="checkbox"
          checked={props.currArticle.posted}
          onChange={(event) => props.postArticle(props.currArticle.id)}/>
        <input type="button" value="save" onClick={()=>handleSave()}/>
        <br/>
        <NavLink to="/user">Back to My Articles</NavLink>
      </>
  ) : (<Redirect to="/user" />)
  )
}

// TODO: make a post button instead of a checkbox
// <input type="button" value="post"/>

const mapStateToProps = (state) => {
  return {currArticle: state.currArticle, currUser: state.currUser}
}

// onChange on the textareas
// hooked up to a dispatch to the store
// that spreads props.currArticle with new props.currArticle.text
const mapDispatchToProps = (dispatch) =>{
  return {
    editText: (text) =>{dispatch({type: EDITING_TEXT, payload: text})},
    editHeadline: (headline) => {dispatch({type: EDITING_HEADLINE, payload: headline})},
    postArticle: (articleId) => {dispatch({type: POSTING_ARTICLE, payload: articleId})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)

// okay we're somewhere
// these now need to be patching to the back end

// and then we need a button for a new article that sets currArticle to
// an object with headline/text/etc
