import React from "react";
import { connect } from "react-redux";
import ArticlePreview from "../Components/ArticlePreview"

const ReaderFrontPage = () =>{
  const generateArticlePreviews = () => {
    return (
      <ArticlePreview />
    )
  } // end of generateArticlePreviews()
  return (
    <>
    {generateArticlePreviews()}
    </>
  )
}

function mapStateToProps(state){
  return {articles: state.articles}
}

export default connect(mapStateToProps)(ReaderFrontPage)
