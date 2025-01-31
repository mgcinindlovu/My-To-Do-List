import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

function ProgressChecker() {
  const [skills, setSkills] = useState([
    { name: 'React', completed: false, kpi: 75 },
    { name: 'Javascript', completed: true, kpi: 90 },
    { name: 'Bootstrap', completed: true, kpi: 90 },
    { name: 'CSS', completed: false, kpi: 60 },
    { name: 'HTML', completed: false, kpi: 60 },
    { name: 'UI/UX Design', completed: false, kpi: 60 },
    { name: 'Digital Marketing', completed: false, kpi: 60 },
  ]);

  const toggleCompletion = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].completed = !updatedSkills[index].completed;
    setSkills(updatedSkills);
  };

  const updateKpi = (index, newKpi) => {
    const updatedSkills = [...skills];
    updatedSkills[index].kpi = newKpi;
    setSkills(updatedSkills);
  };

  return (
    <div className="progress-checker">
      <h2>Skills Progress</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>
                {skill.completed ? (
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                ) : (
                  <FontAwesomeIcon icon={faTimesCircle} color="red" />
                )}
              </span>
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
                <input 
                  type="number" 
                  value={skill.kpi} 
                  onChange={(e) => updateKpi(index, parseInt(e.target.value, 10))} 
                  min="0" 
                  max="100" 
                />
              </div>
              <button onClick={() => toggleCompletion(index)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressChecker;