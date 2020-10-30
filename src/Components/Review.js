import React, { Component } from 'react';

class Review extends Component {

    render() {
        return <div>
            <hr />
            <div>
                <h2 className="text-center font-weight-normal">You have answered {this.props.answered} questions </h2>
            </div>
            <section class="py-5"> </section>
        </div>
    }
}

export default Review;