import React, { Component } from 'react';
import Moment from 'react-moment';

import ('./Profile.css')

class ProfileCreds extends Component {
  render() {

    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p className="profile-text">
          <Moment format="YYYY/MO/DD">{exp.from}</Moment> - 
          {exp.to === null ? (" Now") : (<Moment format="YYYY/MO/DD">{exp.to}</Moment>)}
        </p>
        <p className="profile-text"><strong>Position:</strong> {exp.title}</p>
        <p className="profile-text">
          {exp.location === '' ? null : (<span><strong>Location: </strong>{exp.location}</span>)}
        </p>
        <p className="profile-text">
         {exp.description === '' ? null : (<span><strong>Description: </strong>{exp.description}</span>)}
        </p>
      </li>
    ))

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p className="profile-text">
          <Moment format="YYYY/MO/DD">{edu.from}</Moment> - 
          {edu.to === null ? (" Now") : (<Moment format="YYYY/MO/DD">{edu.to}</Moment>)}
        </p>
        <p className="profile-text"><strong>Degree:</strong> {edu.degree}</p>
    
        <p className="profile-text"><strong>Field:</strong> {edu.fieldOfStudy}</p>
     
        <p className="profile-text">
         {edu.description === '' ? null : (<span><strong>Description: </strong>{edu.description}</span>)}
        </p>
      </li>
    ))
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info creds">
            Experience
          </h3>
          {expItems.length > 0 ? (
              <ul className="list-group profile-text">{expItems}</ul>
            ) : (
              <p className="text-center">No Experience Listed</p>
            )
          }
        </div> 
        <div className="col-md-6">
          <h3 className="text-center text-info creds">
            Education
          </h3>
          {eduItems.length > 0 ? (
              <ul className="list-group profile-text">{eduItems}</ul>
            ) : (
              <p className="text-center">No Education Listed</p>
            )
          }
        </div> 
      </div>
    )
  }
}

export default ProfileCreds;
