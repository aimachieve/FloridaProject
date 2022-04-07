import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { Box, Grid, Container, Typography, Stack, TextField, Button } from '@material-ui/core';

const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <Fragment>
        <h1 className="large text-primary">Edit Your Profile</h1>
        <p className="lead">
          <i className="fas fa-user" /> Add some changes to your profile
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <select name="status" value={status} onChange={onChange} style={{ borderRadius: '10px' }}>
              <option>* Select Professional Status</option>
              <option value="Artist">Artist</option>
              <option value="Developer">Developer</option>
              <option value="Investor">Investor</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="form-group">
            <TextField
              type="text"
              label="Company"
              name="company"
              value={company}
              onChange={onChange}
            />
            <small className="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          <div className="form-group">
            <TextField
              type="text"
              label="Website"
              name="website"
              value={website}
              onChange={onChange}
            />
            <small className="form-text">
              Could be your own or a company website
            </small>
          </div>
          <div className="form-group">
            <TextField
              type="text"
              label="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
            <small className="form-text">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div className="form-group">
            <TextField
              type="text"
              label="* Skills"
              name="skills"
              value={skills}
              onChange={onChange}
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="form-group">
            <TextField
              type="text"
              label="Github Username"
              name="githubusername"
              value={githubusername}
              onChange={onChange}
            />
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className="form-group">
            <TextField
              multiline
              rows={3}
              fullWidth
              label="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={onChange}
            />
            <small className="form-text">Tell us a little about yourself</small>
          </div>

          <div className="my-2">
            <Button
              variant="outlined"
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              sx={{ mr: 3 }}
            >
              Add Social Network Links
            </Button>
            <span>Optional</span>
          </div>

          {displaySocialInputs && (
            <Fragment>
              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x" />
                <TextField
                  type="text"
                  label="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x" />
                <TextField
                  type="text"
                  label="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x" />
                <TextField
                  type="text"
                  label="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x" />
                <TextField
                  type="text"
                  label="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={onChange}
                />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x" />
                <TextField
                  type="text"
                  label="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={onChange}
                />
              </div>
            </Fragment>
          )}

          <input type="submit" className="btn btn-primary my-1" style={{ borderRadius: 10 }} />
          <Button variant="outlined" href="/dashboard">
            Go Back
          </Button>
        </form>
      </Fragment>
    </Container>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
