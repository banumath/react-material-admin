/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { CHANGE_INPUT, DEFAULT_ACTION, VALIDATE_SUCCESS } from './constants';

export const initialState = {
  email: '',
  password: '',
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case CHANGE_INPUT:
        draft[action.name] = action.value;
        break;
      case VALIDATE_SUCCESS:
        draft.errors = action.errors;
        break;
    }
  });

export default loginPageReducer;
