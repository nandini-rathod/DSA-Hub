import React from "react";
import { useParams, Link } from "react-router-dom";
import { problemsData } from "../data/problemsData";
import "./Panel.css";

const Panel = () => {
  const { level } = useParams();
  const topics = problemsData[level] || [];

  return (
    <div className="panel-container">
      <h1 className="level-heading">{level} Topics</h1>

      {/* Button to view roadmap */}
      <div className="roadmap-link">
        <Link to={`/roadmap/${level}`} className="roadmap-btn">
          View {level} Roadmap
        </Link>
      </div>

      <div className="topics-wrapper">
        {topics.map((topic, tIndex) => (
          <div key={tIndex} className="topic-card">
            <h2>{topic.title}</h2>
            <ul>
              {topic.problems.map((problem, pIndex) => (
                <li key={pIndex}>
                  <Link
                    to={`/${level}/${encodeURIComponent(topic.title)}/${encodeURIComponent(problem.name)}`}
                  >
                    {problem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer>
        <button onClick={() => window.history.back()} className="back-button">
          ← Back
        </button>
      </footer>
    </div>
  );
};

export default Panel;