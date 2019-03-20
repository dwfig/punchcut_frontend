import React from 'react';
import { NavLink } from 'react-router';

const WriterArticlePreview = (props) => {
  return(
    <div>{props.article.headline}</div>
  )
}

export default WriterArticlePreview
