const sampleQuestions = [
  {
    question: "Full form of HTML is: ",
    options: ["A. Hypertext Markup Language", "B. Hypertext Main Language", "C. Hello Markup Language", "D. Hyper Markup Language"],
    correct: "A. Hypertext Markup Language",
    questionId: "1001"
  }, 
  {
    question: "Number of DOMs in React are: ",
    options: ["A. 4", "B. 3", "C. 2", "D. 1"],
    correct: "C. 2",
    questionId: "1002"
  },
  {
    question: "Which is one of the types of components in React?",
    options: ["A. Lifecycle Component", "B. Stateful Component", "C. JS Component", "D. Constructor Component"],
    correct: "B. Stateful Component",
    questionId: "1003"
  },
  {
    question: "Which is one of the types of forms in React?",
    options: ["A. Bootstrap form", "B. Reusable Form", "C. Uncontrolled Form", "D. Dependent Form"],
    correct: "C. Uncontrolled Form",
    questionId: "1004"
  },
  {
    question: "Following cannot be used with React.",
    options: ["A. HTML", "B. JavaScript", "C. JSX", "D. Java"],
    correct: "D. Java",
    questionId: "1005"
  },
  {
    question: "Npm command to launch the app is: ",
    options: ["A. npm start", "B. npm build", "C. npm begin", "D. npm boost"],
    correct: "A. npm start",
    questionId: "1006"
  },
  {
    question: "Npm command to install the node modules is: ",
    options: ["A. npm start", "B. npm install", "C. npm begin", "D. npm build"],
    correct: "B. npm install",
    questionId: "1007"
  },
  {
    question: "Which of the following is false about React?",
    options: ["A. React is JS based UI Library", "B. React is view of MVC Framework", "C. React supports props", "D. Stateless functions support lifecycle hooks"],
    correct: "D. Stateless functions support lifecycle hooks",
    questionId: "1008"
  }
]
  
export default (x = 5) =>
  Promise.resolve(sampleQuestions.sort(() => 0.5 - Math.random()).slice(0, x));
  