import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Box, Grid, Container, Typography, Stack, TextField, Button } from '@material-ui/core';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    // return <Navigate to="/dashboard" />;
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 20 }}>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form onSubmit={onSubmit}>
        <Stack spacing={4}>
          <TextField
            type="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
          <input type="submit" className="btn btn-primary" value="Login" style={{ borderRadius: '10px' }} />
        </Stack>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
