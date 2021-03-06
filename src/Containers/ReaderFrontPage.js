import React from "react";
import { connect } from "react-redux";
import ArticlePreview from "../Components/ArticlePreview"

const ReaderFrontPage = (props) =>{

  const generateArticlePreviews = (articles) => {

    if(articles !== undefined){
      // this should be refactored include some kind of ternary/loading alert
      return props.articles.map((article) => {
        console.log(article)
        if (article.posted){
          return <ArticlePreview key={article.id} props={article}/>
        } else {
          return null
        }

      })
    }
  } // end of generateArticlePreviews()

  return (
    <>
    {generateArticlePreviews(props.articles)}
    </>
  )
}

function mapStateToProps(state){
  return {articles: state.articles}
}

export default connect(mapStateToProps)(ReaderFrontPage)
