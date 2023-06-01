import React from 'react';
import data from "../data/resume.json";

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
    <div className='resume-content'>
      <h2>{data.education.title}</h2>
      {data.education.list.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>{item.location}</p>
          <p>{item.dateStart} - {item.dateEnd}{item.current ? "Current" : ""}</p>
          {item.accomplishments.length > 0 ?
            <div>
              <h4>Accomplishments:</h4>
              <ul>
                {item.accomplishments.map((point) => (<li>{point}</li>))}
              </ul>
            </div>
            : ""}
        </div>
      ))}
    </div>
  )
}

export const ResumeAccomplishments = () => {
  return (
    <div className='resume-content'>
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
    <div className='resume-content'>
      <h2>{data.workHistory.title}</h2>
      {data.workHistory.list.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>{item.location}</p>
          <p>{item.startDate} - {item.endDate}{item.current ? "Current" : ""}</p>
          {item.responsibilities.length > 0 ?
            <div>
              <h4>Responsibilities:</h4>
              <ul>
                {item.responsibilities.map((point) => (<li>{point}</li>))}
              </ul>
            </div>
            : ""}
        </div>
      ))}
    </div>
  )
}

export const ResumeContact = () => {
  return (
    <div className='resume-content'>
      <h3>Contact</h3>
      <h4>Phone</h4>
      <a href="tel:+61409393321">+61409393321</a>
      <h4>eMail</h4>
      <a href="mailto:a.wilksy92@gmail.com">A.Wilksy92@gmail.com</a>
      <h4>LinkedIn</h4>
      <a href="www.linkedin.com/in/andrew-wilksy">/Andrew-Wilksy</a>
      <h4>Website</h4>
      <a href="andrewwilks.github.io">AndrewWilks.GitHub.io</a>
    </div>
  )
}

export const ResumeName = () => {
  return (
    <div className='resume-content'>
      <h1>Andrew Wilks</h1>
      <h3>Undergraduate Computer Science Student</h3>
      <p>As a highly motivated and passionate individual currently pursuing a
        Bachelor's degree in Information Technology with a major in Computer
        Science, I am excited about the opportunity to gain practical
        experience in the field and further develop my skills.</p>
    </div>
  )
}