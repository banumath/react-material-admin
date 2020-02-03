/*
 *
 * RegisterPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_INPUT, VALIDATE_SUCCESS } from './constants';

export const initialState = {
  email: '',
  password: '',
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = (state = initialState, action) =>
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

export default registerPageReducer;
