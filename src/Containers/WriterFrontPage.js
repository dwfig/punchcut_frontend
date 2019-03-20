import React from "react";
import { connect } from "react-redux";
import {Redirect, withRouter} from "react-router";

// TODO: this page should make its own fetch—the front page should fetch, this should fetch
// instead of relying on a single prelim fetch and sorting that data (probably?)

class WriterFrontPage extends React.Component {
  constructor(props) {
    super(props);
    console.log('WriterFrontPage', this.props);
  }

  generateWriterArticlePreviews(){
    
  }

  render() {
    console.log('hello', this.props)
    console.log(this.props.currUser)
    return(
      this.props.currUser ? (
      <div>HELLO</div> ):(
      <Redirect to="/redirect" />
      )
    )
  }
}

const mapStateToProps = (state) => {
  console.log('hello world');
  return {currUser : state.currUser}
}

export default connect(mapStateToProps)(WriterFrontPage)



  // props.currUser === undefined ?(
  //   <h1> undefined user </h1>
  // ):(
  //   <div> Hello and congrats</div>
  // )
