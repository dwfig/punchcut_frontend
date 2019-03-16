import React from "react";



const ArticlePreview = (props) => {
  let byLine = props.props.users.filter(user=> user.role === "writer")[0].name
  // byline is the associated user whose roll was writer
  // TODO: account for multiple writers ("Fred" "Fred and George" "Fred, George, and Ron")
  // this has to happen on the article-writing side too
  // TODO: add classNames to these divs, give front page styling
  // we only print the first 500 characters
  // TODO: figure out a way to distinguish these on the front page!
  // not all previews are the same: splash, smaller ones, etc
  // maybe just different components in ReaderFrontPage:
  // splash, subsplash, sidebar
  return(
    <div>
      <h1>{props.props.headline}</h1>
      <p>{byLine}</p>
      <p>{props.props.text.substring(0,500)}...</p>
    </div>
  )
}

export default ArticlePreview
