import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticlePreview from "./Components/ArticlePreview"

const apiUrl = "http://localhost:3001/api/v1/articles"

class App extends Component {
  componentDidMount(){
    fetch(apiUrl)
      .then(res => res.json())
      .then(parsed => console.log(parsed))
  }

  generateArticlePreviews(){
    return <ArticlePreview />
  }

  render() {
    return (
      <div className="App">
      {this.generateArticlePreviews()}
      </div>
    );
  }
}

export default App;
