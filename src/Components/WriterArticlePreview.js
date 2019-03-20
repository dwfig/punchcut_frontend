import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { EDITING_ARTICLE } from "../types";

const WriterArticlePreview = (props) => {
  return(
    <NavLink to={`edit/${props.article.id}`}>
      <div onClick={() => props.editArticle(props.article)}>
        {props.article.headline}
      </div>
    </ NavLink>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {editArticle: (article) => {
    dispatch({type: EDITING_ARTICLE, payload: article})
  }}
}

export default connect(null, mapDispatchToProps)(WriterArticlePreview)
