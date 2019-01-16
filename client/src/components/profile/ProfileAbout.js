import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

import ('./Profile.css')

class ProfileAbout extends Component {

  render() {

    const { profile } = this.props;

    // Get the first name 
    const firstName = profile.user.name.trim().split(' ')[0];

    // Skill List 
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check"/> {skill}
      </div>
    ))
    return (
    
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info about">{firstName}'s Bio</h3>
            <p className="lead profile-text">
              {isEmpty(profile.bio) ? null : (<span>{profile.bio}</span>)}
            </p>
            <hr />
            <h3 className="text-center text-info about">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center profile-text">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};



export default ProfileAbout;
