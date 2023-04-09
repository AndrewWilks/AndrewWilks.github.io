import React from 'react';
import data from "../resume.json";

const ProgressBar = (props) => {
  return (
    <div className="progress-bar" style={{ '--progress-value': `${props.value * 100}%` }} />
  );
}


export const ResumeSkills = () => {
  return (
    <div className='resume-content'>
      <h3>{data.skills.title}</h3>
      {data.skills.list.map((item) => (
        <div className="resume-skill">
          <h5>{item.title}</h5>
          <span>{item.experience}</span>
          <ProgressBar value={item.experienceValue} />
        </div>
      ))}
    </div>
  )
}

export default ResumeSkills;

export const ResumeProgramming = () => {
  return (
    <div className='resume-content'>
      <h3>{data.programmingLanguages.title}</h3>
      {data.programmingLanguages.list.map((item) => (
        <div className="resume-skill">
          <h5>{item.title}</h5>
          <span>{item.experience}</span>
          <ProgressBar value={item.experienceValue} text={item.experience} />
        </div>
      ))}
    </div>
  )
}

export const ResumeSoftware = () => {
  return (
    <div className='resume-content'>
      <h3>{data.software.title}</h3>
      {data.software.list.map((item) => (
        <div className="resume-skill">
          <h5>{item.title}</h5>
          <span>{item.experience}</span>
          <ProgressBar value={item.experienceValue} text={item.experience} />
        </div>
      ))}
    </div>
  )
}

export const ResumeSpoken = () => {
  return (
    <div className='resume-content'>
      <h3>{data.spokenLanguages.title}</h3>
      {data.spokenLanguages.list.map((item) => (
        <div className="resume-skill">
          <h5>{item.title}</h5>
          <span>{item.experience}</span>
          <ProgressBar value={item.experienceValue} text={item.experience} />
        </div>
      ))}
    </div>
  )
}

export const ResumeEducation = () => {
  return (
    <div>
      <h2>{data.education.title}</h2>
      {data.education.list.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <span>{item.location}</span>
          {item.accomplishments.length < 0 ? <div>HELLO</div> : ""}
          <h4>Accomplishments:</h4>
          <ul>
            {item.accomplishments.map((point) => (<li>{point}</li>))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export const ResumeAccomplishments = () => {
  return (
    <div>
      <h2>{data.accomplishments.title}</h2>
      {data.accomplishments.list.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  )
}

export const ResumeHistory = () => {
  return (
    <div>
      <h2>{data.workHistory.title}</h2>
      {data.workHistory.list.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <span>{item.location}</span>
        </div>
      ))}
    </div>
  )
}

export const ResumeStatment = () => {
  return (
    <div></div>
  )
}

export const ResumeName = () => {
  return (
    <div></div>
  )
}