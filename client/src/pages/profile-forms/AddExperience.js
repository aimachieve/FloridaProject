import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import { Box, Grid, Container, Typography, Stack, TextField, Button } from '@material-ui/core';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <Fragment>
        <h1 className="large text-primary">Add An Experience</h1>
        <p className="lead">
          <i className="fas fa-code-branch" /> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form
          // className="form"
          onSubmit={e => {
            e.preventDefault();
            console.log('formdata=>', formData)
            addExperience(formData, history);
          }}
        >
          <Stack spacing={3}>
            <TextField
              fullWidth
              type="text"
              label="* Job Title"
              name="title"
              value={title}
              onChange={onChange}
              required
            />

            <TextField
              fullWidth
              type="text"
              label="* Company"
              name="company"
              value={company}
              onChange={onChange}
              required
            />

            <TextField
              fullWidth
              type="text"
              label="Location"
              name="location"
              value={location}
              onChange={onChange}
            />

            <h4>From Date</h4>
            <TextField
              fullWidth type="date" name="from" value={from} onChange={onChange} />

            <p>
              <input
                type="checkbox"
                name="current"
                checked={current}
                value={current}
                onChange={() => {
                  setFormData({ ...formData, current: !current });
                }}
              />{' '}
              Current Job
            </p>

            <h4>To Date</h4>
            <TextField
              fullWidth
              type="date"
              name="to"
              value={to}
              onChange={onChange}
              disabled={current}
            />

            <TextField
            multiline
              name="description"
              cols="30"
              rows={5}
              label="Job Description"
              value={description}
              onChange={onChange}
            />
          </Stack>

          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </Fragment>
    </Container>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AddExperience);
