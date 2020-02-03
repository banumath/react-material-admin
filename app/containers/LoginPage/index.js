/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Link,
  FormControl,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  makeSelectLoginPage,
  makeSelectLoginEmail,
  makeSelectLoginPassword,
  makeSelectErrors,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { styles } from './styles';
import { changeInput, submitForm, validateForm } from './actions';

export function LoginPage({
  classes,
  email,
  password,
  errors,
  onChangeInput,
  onSubmitForm,
}) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <Container fixed>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item md={4}>
          <Paper elevation={1} className={classes.paper}>
            <div className={classes.logoWrapper}>
              <img
                className={classes.logo}
                src="https://www.fcodelabs.com/img/fcode_logo.png"
                alt="FCodeLabs"
              />
            </div>
            <Typography variant="h5" className={classes.formTitle}>
              Login
            </Typography>
            <form
              noValidate
              className={classes.loginForm}
              onSubmit={onSubmitForm}
            >
              <FormControl fullWidth className={classes.formField}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  value={email}
                  fullWidth
                  type="email"
                  autoComplete="email"
                  onChange={onChangeInput}
                  error={errors.includes('email') && email === ''}
                  helperText={
                    errors.includes('email') && email === ''
                      ? 'Please enter a valid email'
                      : ''
                  }
                />
              </FormControl>
              <FormControl fullWidth className={classes.formField}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  value={password}
                  fullWidth
                  type="password"
                  autoComplete="current-password"
                  onChange={onChangeInput}
                  error={errors.includes('password') && password.length < 6}
                  helperText={
                    errors.includes('password') && password.length < 6
                      ? 'Password should be at least 6 characters'
                      : ''
                  }
                />
              </FormControl>

              <Grid container>
                <Grid item xs={12} style={{ paddingBottom: 20 }}>
                  <Link href="#" color="inherit" variant="body2">
                    Forgot your password?
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  errors: PropTypes.array,
  onChangeInput: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  email: makeSelectLoginEmail(),
  password: makeSelectLoginPassword(),
  errors: makeSelectErrors(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: evt =>
      dispatch(changeInput(evt.target.name, evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(validateForm());
      dispatch(submitForm());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(withStyles(styles)(LoginPage));
