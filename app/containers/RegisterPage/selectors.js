import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerPage state domain
 */

const selectRegisterPageDomain = state => state.registerPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterPage
 */

const makeSelectRegisterPage = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate,
  );

const makeSelectLoginEmail = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.email,
  );

const makeSelectLoginPassword = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.password,
  );

const makeSelectErrors = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.errors,
  );

export {
  selectRegisterPageDomain,
  makeSelectRegisterPage,
  makeSelectLoginEmail,
  makeSelectLoginPassword,
  makeSelectErrors,
};
