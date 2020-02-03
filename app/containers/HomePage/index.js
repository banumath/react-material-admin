/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

// Material Components
import { Container, Paper, Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AppLayout from '../../components/AppLayout';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  pageTitle: {
    marginBottom: 0,
  },
  pageSubTitle: {
    paddingBottom: '10px !important',
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <AppLayout>
      <Container maxWidth="false" disableGutters>
        <Box p={{ xs: 2, sm: 3 }}>
          <Typography variant="h6" className={classes.pageTitle}>
            Children
          </Typography>
          <Typography variant="caption" className={classes.pageSubTitle}>
            List of children listed under your account
          </Typography>
          <Paper style={{ padding: 20, marginTop: 20 }}>
            <Grid container spacing={3} className={classes.gridContainer}>
              <Grid item md={4}>
                <Paper>xs=12</Paper>
              </Grid>
              <Grid item md={4}>
                <Paper>xs=12</Paper>
              </Grid>
              <Grid item md={4}>
                <Paper>xs=12</Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </AppLayout>
  );
}

const mapToStateProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  users: state.firestore.ordered.Users,
});

export default compose(
  firestoreConnect(() => ['Users']),
  connect(mapToStateProps),
)(HomePage);
