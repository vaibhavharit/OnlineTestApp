import React, { Component } from "react";
import "./style.css";
import quizJSON from "../quizJSON";
import Questions from "./Questions";
import Result from "./Result";
import Review from "./Review";

class QuizMain extends Component {

    state = {
        sampleQuestions: [],
        answered: 0,
        score: 0,
    };

    getQuestions = () => {
        quizJSON().then(question => {
            this.setState({
                sampleQuestions: question
            });
        });
    };

    verifyAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            answered: this.state.answered < 5 ? this.state.answered + 1 : 5,
        });
    }

    takeAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            answered: 0,
        })    
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
 
        return (
            <div style={{ backgroundImage: `url("https://unsplash.it/1900/1080?image=1081")`, backgroundRepeat: 'repeat' }}>
            <div className="title">Online Test on React</div>
                { this.state.answered < 5 &&
                this.state.sampleQuestions.length > 0 && 
                this.state.sampleQuestions.map(
                    ({question, options, correct, questionId}) => (
                        <Questions 
                            question={question} 
                            option={options} 
                            key={questionId}
                            selected={answer => this.verifyAnswer(answer, correct)}/>
                    )
                )}

                {this.state.answered===5 ? ( <Result score={this.state.score} takeAgain={this.takeAgain}/> ) : null}
                
                <section class="py-5"> </section> 
                <Review answered={this.state.answered}></Review>

            </div>
            
        );
    }
}
export default QuizMain;
