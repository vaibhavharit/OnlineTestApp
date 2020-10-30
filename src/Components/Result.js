import React, { Component } from "react";

class Result extends Component {

  render() {
    return <div className="scoreSection">
        
        <div className="score">
          Thanks for taking the test.<br/>
          You answered {this.props.score} / 5 questions correctly!
        </div> 

        <section class="py-5"/><section class="py-5"/><section class="py-5"/><section class="py-5"/><section class="py-5"/><section class="py-5"/>
        
        <button type="button" class="btn btn-primary btn-lg btn-block my-btn"  onClick={this.props.takeAgain}>
          Click to take the Test again
        </button>

      </div>
  }

}

export default Result;
