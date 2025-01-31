import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  const [skills] = useState([
    { name: 'React', completed: false, kpi: 75 },
    { name: 'Javascript', completed: true, kpi: 90 },
    { name: 'Bootstrap', completed: true, kpi: 90 },
    { name: 'CSS', completed: false, kpi: 60 },
    { name: 'HTML', completed: false, kpi: 60 },
    { name: 'UI/UX Design', completed: false, kpi: 60 },
    { name: 'Digital Marketing', completed: false, kpi: 60 },
  ]);

  return (
    <div className="welcome">
      
      <ul>
        {skills.slice(0, 2).map((skill, index) => (
          <li key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.completed ? 'Completed' : 'In Progress'}</span>
              <div className="kpi-circle">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${skill.kpi}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">{skill.kpi}%</text>
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/dashboard" className="btn">View All</Link>
    </div>
  );
}

export default Welcome;