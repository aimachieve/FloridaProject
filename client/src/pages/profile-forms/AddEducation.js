import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import { Box, Grid, Container, Typography, Stack, TextField, Button } from '@material-ui/core';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <Fragment>
        <h1 className="large text-primary">Add Your Education</h1>
        <p className="lead">
          <i className="fas fa-code-branch" /> Add any school or bootcamp that you
          have attended
        </p>
        <small>* = required field</small>
        <form
          onSubmit={e => {
            e.preventDefault();
            addEducation(formData, history);
          }}
        >
          <Stack spacing={3}>
          <TextField
            type="text"
            label="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
          <TextField
            type="text"
            label="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
          <TextField
            type="text"
            label="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
          <h4>From Date</h4>
          <TextField type="date" name="from" value={from} onChange={onChange} />
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            Current School
          </p>
          <h4>To Date</h4>
          <TextField
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
            label="Program Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
