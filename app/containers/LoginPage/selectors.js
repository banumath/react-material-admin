import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

const makeSelectLoginEmail = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.email,
  );

const makeSelectLoginPassword = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.password,
  );

const makeSelectErrors = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.errors,
  );

export {
  selectLoginPageDomain,
  makeSelectLoginPage,
  makeSelectLoginEmail,
  makeSelectLoginPassword,
  makeSelectErrors,
};
