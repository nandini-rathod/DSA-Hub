import React from "react";
import { useParams, Link } from "react-router-dom";
import { problemsData } from "../data/problemsData";
import "./ProblemPage.css";

const ProblemPage = () => {
  const { level, topic, problem } = useParams();

  // Find the topic object for the current level
  const topicData = problemsData[level]?.find(t => t.title === decodeURIComponent(topic));

  // Find the problem object inside the topic
  const problemData = topicData?.problems.find(p => p.name === decodeURIComponent(problem));

  if (!topicData || !problemData) {
    return (
      <div className="problem-page">
        <h2>Problem Not Found</h2>
        <Link to={`/${level}`} className="back-btn">
          ← Back to {level} Topics
        </Link>
      </div>
    );
  }

  return (
    <div className="problem-page">
      <h1>{problemData.name}</h1>
      <p><strong>Level:</strong> {level}</p>
      <p><strong>Topic:</strong> {topicData.title}</p>
      <div className="problem-description">
        {problemData.description}
      </div>

      <Link to={`/${level}`} className="back-btn">
        ← Back to {level} Topics
      </Link>
    </div>
  );
};

export default ProblemPage;