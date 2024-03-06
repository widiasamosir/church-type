import React, { useState } from 'react';
import './App.css';
import Introduction from './Introduction.js'
function App() {
  const questions = [
    {
      question: "When faced with a challenge in church service, I tend to:",
      options: ["I take immediate action, utilizing my technical skills to address the issue.", "I pause to pray for guidance and seek input from others before deciding on a course of action."]
    },
    {
      question: "In social gatherings at church, I am more likely to:",
      options: ["I enjoy meeting new people and initiating conversations, making everyone feel welcomed.", "I prefer spending time with close church friends, engaging in deeper spiritual discussions."]
    },
    {
      question: "When making decisions for church activities, I rely more on:",
      options: ["I use logical reasoning and consider practical factors to make informed choices.", "I trust in prayer and seek spiritual discernment to guide my decisions."]
    },
    {
      question: "In a church project, I am usually the one who:",
      options: ["I take leadership roles, ensuring tasks are assigned and completed efficiently.", "I contribute creative ideas and foster collaboration among team members."]
    },
    {
      question: "I feel most fulfilled during church service when:",
      options: ["I contribute to the technical aspects, ensuring smooth operation of media equipment.", "I participate in worship, connecting with God through music and prayer."]
    },
    {
      question: "During church events, I prefer to:",
      options: ["Take charge of organizing and managing logistics, ensuring everything runs smoothly.", "Participate in activities that allow me to connect with others and build relationships."]
    },
    {
      question: "When faced with a disagreement within the church community, I tend to:",
      options: ["Address the issue directly and work towards finding a resolution through communication and compromise.", "Take time to reflect on the differing perspectives and seek guidance through prayer before attempting to resolve the conflict."]
    },
    {
      question: "In my approach to spiritual growth, I prioritize:",
      options: ["Studying and understanding scripture, seeking to deepen my knowledge of biblical teachings.", "Engaging in prayer, meditation, and spiritual practices that cultivate a deeper connection with God."]
    },
    {
      question: "When volunteering for church activities, I am more inclined towards:",
      options: ["Tasks that require technical skills and attention to detail.", "Roles that involve creativity and allow for self-expression."]
    },
    {
      question: "During church services, I feel most comfortable:",
      options: ["Operating behind the scenes, ensuring the smooth execution of technical aspects such as sound and lighting.", "Being in front, actively participating in leading worship or teaching."]
    },
    {
      question: "In my interactions with fellow church members, I prioritize:",
      options: ["Being hospitable and welcoming, making an effort to connect with newcomers and create a sense of belonging.", "Engaging in meaningful conversations and providing emotional support to those in need."]
    },
    {
      question: "When serving in church ministry, I value:",
      options: ["Efficiency and organization, ensuring that tasks are completed in a timely and structured manner.", "Authenticity and sincerity, fostering genuine connections and creating an environment of openness and trust."]
    },
    {
      question: "During church meetings or discussions, I tend to:",
      options: ["Take on a leadership role, guiding the conversation and ensuring that objectives are met.", "Listen attentively to others' perspectives and contribute insights when necessary, fostering a collaborative atmosphere."]
    },
    {
      question: "In my personal devotional time, I find inspiration from:",
      options: ["Studying scripture and theological literature, delving into the depths of theological understanding.", "Engaging in creative practices such as journaling, music, or art, allowing for a more expressive and reflective form of worship."]
    },
    {
      question: "When volunteering for church outreach programs, I prefer activities that involve:",
      options: ["Practical service such as organizing events, distributing resources, or providing assistance to those in need.", "Building relationships and engaging in personal interactions, offering emotional support and spiritual guidance."]
    },
    {
      question: "When engaging with children at church, I:",
      options: ["Enjoy interacting with them, participating in activities and games that foster their spiritual growth.", "Prefer teaching them in structured lessons, focusing on conveying biblical principles and stories."]
    },
    {
      question: "In group activities with children, I:",
      options: ["Enjoy organizing and leading group activities that encourage teamwork and cooperation.", "Prefer providing individual attention and guidance to children who may need extra support or encouragement."]
    },
    {
      question: "I believe patience is essential and:",
      options: ["I demonstrate patience and understanding when working with children, allowing them time to learn and grow at their own pace.", "I prioritize maintaining discipline and structure in the classroom environment, ensuring that lessons are conducted efficiently."]
    }
    
  ];
  

  const serviceRoles = {
    A: "Media Team",
    B: "Sunday School Teacher",
    C: "Welcoming Team",
    D: "Koinonia Team",
    E: "Praise and Worship Team"
  };

  const roleDescriptions = {
    "Media Team": "Responsible for managing audiovisual equipment during church services, ensuring smooth operation of sound systems, projectors, and screens.",
    "Sunday School Teacher": "Responsible for teaching and guiding children or youth in biblical studies and spiritual growth, creating engaging and educational lessons.",
    "Welcoming Team": "Responsible for welcoming congregants as they enter the church, assisting with seating, distributing bulletins, and ensuring a warm and friendly atmosphere.",
    "Koinonia Team": "Responsible for fostering fellowship and community within the church, organizing social events, small group meetings, and activities aimed at building relationships.",
    "Praise and Worship Team": "Responsible for leading congregational singing, playing musical instruments, and leading in worship during church services, creating an atmosphere of praise and adoration."
  };


  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({ A: 0, B: 0 });
  const [serviceRole, setServiceRole] = useState(null);
  const [showIntro, setShowIntro] = useState(true); // State to control showing the introduction

  const handleOptionClick = (option) => {
    const selectedOptionIndex = option === questions[currentQuestion].options[0] ? 0 : 1;
    const newScores = determineServiceRole(currentQuestion, selectedOptionIndex, answers);
    
    setAnswers(newScores);
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find the service role with the highest score
      let maxScore = -1;
      let maxRole = null;
      for (const role in newScores) {
        if (newScores[role] > maxScore) {
          maxScore = newScores[role];
          maxRole = role;
        }
      }
      setServiceRole(serviceRoles[maxRole]);
    }
  };

  const determineServiceRole = (questionIndex, answerIndex, currentScores) => {
    const newScores = { ...currentScores }; // Make a copy of the current scores
  
    switch (questionIndex) {
      case 0:
        // When faced with a challenge in church service
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 1:
        // In social gatherings at church
        newScores.C += answerIndex === 0 ? 1 : 0; // Welcoming Team +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 2:
        // When making decisions for church activities
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 3:
        // In a church project
        newScores.B += answerIndex === 0 ? 1 : 0; // ZERA Teacher +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 4:
        // I feel most fulfilled during church service when
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      // Add more cases for the remaining questions
      case 5:
        // During church events
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.C += answerIndex === 1 ? 1 : 0; // Welcoming Team +1 if answer index 1
        break;
      case 6:
        // When faced with a disagreement within the church community
        newScores.B += answerIndex === 0 ? 1 : 0; // ZERA Teacher +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 7:
        // In my approach to spiritual growth
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 8:
        // When volunteering for church activities
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.B += answerIndex === 1 ? 1 : 0; // ZERA Teacher +1 if answer index 1
        break;
      case 9:
        // During church services
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.E += answerIndex === 1 ? 1 : 0; // Praise and Worship Team +1 if answer index 1
        break;
      case 10:
        // In my interactions with fellow church members
        newScores.C += answerIndex === 0 ? 1 : 0; // Welcoming Team +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 11:
        // When serving in church ministry
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 12:
        // During church meetings or discussions
        newScores.B += answerIndex === 0 ? 1 : 0; // ZERA Teacher +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 13:
        // In my personal devotional time
        newScores.A += answerIndex === 0 ? 1 : 0; // Media Team +1 if answer index 0
        newScores.E += answerIndex === 1 ? 1 : 0; // Praise and Worship Team +1 if answer index 1
        break;
      case 14:
        // When volunteering for church outreach programs
        newScores.C += answerIndex === 0 ? 1 : 0; // Welcoming Team +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 15:
        // When engaging with children at church
        newScores.B += answerIndex === 0 ? 1 : 0; // ZERA Teacher +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 16:
        // In group activities with children
        newScores.B += answerIndex === 0 ? 1 : 0; // ZERA Teacher +1 if answer index 0
        newScores.D += answerIndex === 1 ? 1 : 0; // Koinonia Team +1 if answer index 1
        break;
      case 17:
        // As a ZERA Teacher (Sunday school teacher)
        newScores.B += answerIndex === 0 ? 1 : 0; // ZERA Teacher +1 if answer index 0
        break;
      default:
        break;
    }
  
    return newScores;
  };
  
  


  const handleStartQuiz = () => {
    setShowIntro(false); // Hide the introduction when starting the quiz
  };

  return (
    <div className="App">
      <h1>Discover Your Church Service Role</h1>
      {showIntro ? (
        <Introduction /> // Show the Introduction component if showIntro is true     
      ) : (
        serviceRole ? (
          <div className="result-container">
            <h2>Your Service Role: {serviceRole}</h2>
            <img src={require(`../src/img/${serviceRole.toLowerCase()}.png`)} alt={serviceRole} />
            <p><strong>Description:</strong> {roleDescriptions[serviceRole]}</p>
          </div>
        ) : (
          <div className="question-container">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      )}
      {showIntro && (
        <button className="start-button" onClick={handleStartQuiz}>Start Quiz</button> // Button to start the quiz
      )}   
    </div>
  );
}

export default App;
