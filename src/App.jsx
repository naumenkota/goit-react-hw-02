import { useState, useEffect } from 'react';
import Description from "./components/description/Description";
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';


export default function App() {

  
  const savedData = JSON.parse(localStorage.getItem("saved-data"));

  const [votingData, setVotingData] = useState(savedData || {
    good: 0,
    neutral: 0,
    bad: 0,

  });
  
  useEffect(() => { window.localStorage.setItem("saved-data", JSON.stringify(votingData)) }, [votingData]); 
  
  const updateFeedback = feedbackType => {
    setVotingData({
      ...votingData,
      [feedbackType]: votingData[feedbackType] + 1,
     
    })
  };

  const resetFeedback = () => {
    setVotingData({
    good: 0,
    neutral: 0,
    bad: 0
  });
  };

  const totalFeedback = votingData.good + votingData.neutral + votingData.bad;
  const positiveFeedback = Math.round((votingData.good / totalFeedback) * 100);

 

  return (
    <div className="container">
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? <Feedback votingData={votingData} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification/> }
      
    </div>
  );
}
