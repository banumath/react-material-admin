/*
 *
 * LoginPage actions
 *
 */

import { CHANGE_INPUT, DEFAULT_ACTION, SUBMIT_FORM, VALIDATE_FORM, VALIDATE_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function changeInput(name, value) {
  return {
    type: CHANGE_INPUT,
    name,
    value,
  };
}

export function submitForm() {
  return {
    type: SUBMIT_FORM,
  };
}

export function validateForm() {
  return {
    type: VALIDATE_FORM,
  };
}

export function validateSuccess(errors) {
  return {
    type: VALIDATE_SUCCESS,
    errors,
  };
}
