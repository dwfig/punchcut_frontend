import React, { Component, Fragment } from 'react';
import './App.css';
import ReaderFrontPage from "./Containers/ReaderFrontPage";
import LoginPage from "./Containers/LoginPage"
import { connect } from "react-redux";
import { STORING_ARTICLES } from "./types"
import { Switch, Route } from 'react-router-dom';

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
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/admin" component={() =><LoginPage />} />
          <Route path="/" component={() =><ReaderFrontPage />} />
        </Switch>
      </Fragment>
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

export default connect(null, mapDispatchToProps)(App);
