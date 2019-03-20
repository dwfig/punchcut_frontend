import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import WriterArticlePreview from "../Components/WriterArticlePreview"

// TODO: this page should make its own fetch—the front page should fetch, this should fetch
// instead of relying on a single prelim fetch and sorting that data (probably?)

// Current goals:
// Writer page displays articles associated with this user
// Also provides button for going to a new article page
// (they should be the same page, that's work today)

class WriterFrontPage extends React.Component {

  getWritersArticles(){
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
    // that's probably easier than this nonsense
  }

  generateWriterArticlePreviews(){
    let writersArticles = this.getWritersArticles()
    return writersArticles.map((article, index)=>{
      return(
        <WriterArticlePreview key={index} article={article}/>
      )
    })
  }

  render() {
    return(
      this.props.currUser ? (this.generateWriterArticlePreviews()) : (<Redirect to="/redirect" />)
    )
  }
}

const mapStateToProps = (state) => {
  return {currUser : state.currUser, articles: state.articles}
}

export default connect(mapStateToProps)(WriterFrontPage)



  // props.currUser === undefined ?(
  //   <h1> undefined user </h1>
  // ):(
  //   <div> Hello and congrats</div>
  // )
