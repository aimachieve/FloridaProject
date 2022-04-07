import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Box, Grid, Container, Typography, Stack, TextField, Button } from '@material-ui/core';


const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    // return <Navigate to="/dashboard" />;
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 20 }}>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form onSubmit={onSubmit}>
        <Stack spacing={4}>
          <TextField
            type="text"
            label="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <TextField
            type="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
          <TextField
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <TextField
            type="password"
            label="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
          <input type="submit" className="btn btn-primary" value="Register" style={{ borderRadius: '10px' }} />
        </Stack>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Container>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
