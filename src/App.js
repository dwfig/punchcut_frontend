import React, { Component } from 'react';
import './App.css';
import ReaderFrontPage from "./Containers/ReaderFrontPage";
import { connect } from "react-redux";

const apiUrl = "http://localhost:3001/api/v1/articles"

class App extends Component {

  componentDidMount(){
    fetch(apiUrl)
      .then(res => res.json())
      .then(parsed => this.props.storeArticles(parsed))
      //use props to dispatch an action to store the parsed articles
  }

  render() {
    return (
      <div className="App">
        <ReaderFrontPage />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {storeArticles: (articles) => {
    dispatch({type: "STORING_ARTICLES", payload: articles})
  }}
  // this key value pair storeArticles: fn() handles putting fetched articles
  // into the store
  // map mapDispatchToProps makes that function available to this component
  // which makes use of it in the fetch
}

export default connect(null, mapDispatchToProps)(App);
