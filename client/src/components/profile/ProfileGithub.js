import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ('./Profile.css')

class ProfileGithub extends Component {

   myRef = React.createRef();

  state={
    clientId: '2f5757f2ed471921eafe',
    clientSecret: 'e1ec8f70b800aad74ece4d1a5f44eddd6e697aa1',
    count: 5,
    sort: 'create: asc',
    repos: []
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret${clientSecret}`)
        .then(res => res.json())
        .then(data => {

          if(this.myRef.current && data.message !== "Not Found"){
            this.setState({repos: data})
          }
        })
        .catch(err => console.log(err))
  }

  render() {
    const { repos } = this.state;
    const repoItems = repos.map(repo => (

      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
         
          <div className="col-md-6 repo-item">
            <h4>
              <Link to={repo.html_url} className="text-info" target="_blank">
                  {repo.name}
              </Link>
            </h4>

              <p>{ repo.description }</p>

          </div>

          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ))
    return (
      <div ref={this.myRef} className="git-hub"> 
          <hr/>
          <h3 className="mb-4">Latest Github Repos</h3>
          {repoItems}
      </div>
    )
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,

};

export default ProfileGithub;
