import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import WriterArticlePreview from "../Components/WriterArticlePreview"
import { EDITING_ARTICLE } from "../types";
import { NavLink } from 'react-router-dom';



// TODO: this page should make its own fetch??
// for efficiency of calls

// Current goals:
// Writer page displays articles associated with this user
// Also provides button for going to a new article page
// (they should be the same page)

const postUrl = "http://localhost:3001/api/v1/articles"
const rolesUrl = "http://localhost:3001/api/v1/roles"

class WriterFrontPage extends React.Component {

  getWritersArticles(){
    console.log(this.props)
    let articleUsers = this.props.articles.map((article)=>{return article.users})
    let userEmails = articleUsers.map((userArray) =>
      {return userArray.map((user)=>{return user.email})})
    // Looking at articles that have an array of nested articleUsers
    // those arrays have users and those users have emails, which we have in userEmails
    // filter articles based on whether the currUser email shows up in userEmails
    //
    // articleUsers (and therefore userEmails) are always generated from the same group
    // as filteredArticles, so there should be no issue indexing
    let filteredArticles = this.props.articles.filter((article, index) => {
      return userEmails[index].includes(this.props.currUser.email)})
    // console.log(filteredArticles)
    return filteredArticles
    // TODO: make a separate route and fetch there for each users' associated aritcles
    // that's probably easier than this
  }

  generateWriterArticlePreviews(){
    let writersArticles = this.getWritersArticles()
    return writersArticles.map((article, index)=>{
      return(
        <WriterArticlePreview key={index} article={article}/>
      )
    })
  }

  handleNewArticle(){
    //this should be refactored into two or three
    // first fetch, second fetch, redirect
    //console.log("clicked")
    let newArticle = {}
    // ONE
    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        "text" : "",
        "headline" :"Untitled Article",
        "posted" : "false",
      })
    })
    .then(res => res.json())
    .then(parsed=> {
      newArticle = parsed
      return newArticle.id
    })
    // TWO
    .then(a => fetch(rolesUrl,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        "user_id": this.props.currUser.id,
        "article_id": newArticle.id,
        "user_role" : "writer"
      })
    }))
    // THREE
    .then(a => {
      this.props.editArticle(newArticle)
      this.props.history.push(`/edit/${newArticle.id}`)
    })
    // this should set currArticle to this article
  }

  render() {
    // add a conditional here so that the articles don't try to load
    // if there aren't any articles
    if(this.props.currUser){
      if(this.props.articles){
        return(
          <>
            {this.generateWriterArticlePreviews()}
            <input type="button" value="new article" onClick={() => this.handleNewArticle()}/>
          </>
        )
      }else{
        return (<div>...</div>) }
    }else{
      return(
        <div>You must <NavLink to="/admin">login</NavLink> to see this page.</div>
      )
    }
  }
  // I'm worried that a redirect here might take place before the autologin
  // if so, render the redirect page here instead
}

const mapStateToProps = (state) => {
  return {currUser : state.currUser, currArticle: state.currArticle, articles: state.articles}
}

const mapDispatchToProps = (dispatch) => {
  return {editArticle: (article) => {
    dispatch({type: EDITING_ARTICLE, payload: article})
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(WriterFrontPage)
