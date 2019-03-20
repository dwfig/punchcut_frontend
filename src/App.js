import React, { Component } from 'react';
import './App.css';
import ReaderFrontPage from "./Containers/ReaderFrontPage";
import LoginPage from "./Containers/LoginPage"
import NoMatch from "./Components/NoMatch"
import RedirectPage from "./Containers/RedirectPage"
import WriterFrontPage from "./Containers/WriterFrontPage"
import EditPage from "./Containers/EditPage"
import { connect } from "react-redux";
import { STORING_ARTICLES } from "./types"
import { Switch, Route, withRouter } from 'react-router-dom';

const apiUrl = "http://localhost:3001/api/v1/articles"

class App extends Component {

  componentDidMount(){
    fetch(apiUrl)
      .then(res => res.json())
      .then(parsed => this.props.storeArticles(parsed))
      //use props to dispatch an action to store the parsed articles
  }
  //check Redux docs on React-Router if there are problems later
  // admin link deliberately!! not provided to reader
  // but we'll provide something on reader front page if
  // the user is already logged in

  // add a currUser in state/store, check against that here
  // <Route path="/user" component={currUser ? WriterFrontPage : RedirectPage} />
  render() {
    return (
        <Switch>
          <Route exact path="/admin" component={LoginPage} />
          <Route exact path="/" component={ReaderFrontPage} />
          <Route exact path="/user" component={WriterFrontPage} />
          <Route exact path="/redirect" component={RedirectPage} />
          <Route exact path="/edit/:articleId" component={EditPage} name="edit" />
          <Route component={NoMatch} />
        </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {storeArticles: (articles) => {
    dispatch({type: STORING_ARTICLES, payload: articles})
  }}
  // this key value pair storeArticles: fn() handles putting fetched articles
  // into the store
  // map mapDispatchToProps makes that function available to this component
  // which makes use of it in the fetch
}

export default withRouter(connect(null, mapDispatchToProps)(App));
