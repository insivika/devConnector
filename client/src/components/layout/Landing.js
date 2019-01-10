import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import './Landing.css'

class Landing extends Component {

  componentDidMount() {
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }

  render() {
    return (
      <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container hero-copy-wrapper">
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="display-3 mb-4 hero-header">
              Share, Discuss, Learn
              </h1>
              <p className="hero-copy"> Create a profile, post a question and get help from other developers</p>
              <Link to="/register" className="btn btn-lg mr-2 sign-up-btn">Sign Up</Link>
              <Link to="/login" className="btn btn-lg login-btn">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing);