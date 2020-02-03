import { take, call,all, put, select, takeLatest} from 'redux-saga/effects';

// Individual exports for testing
import { makeSelectLoginEmail, makeSelectLoginPassword } from './selectors';
import { validateSuccess } from './actions';
import { SUBMIT_FORM, VALIDATE_FORM } from './constants';

export function* onRegister() {
  // select email and password from the store
  const email = yield select(makeSelectLoginEmail());
  const password = yield select(makeSelectLoginPassword());
}

export function* onValidate() {
  const email = yield select(makeSelectLoginEmail());
  const password = yield select(makeSelectLoginPassword());
  const errorFields = [];
  if (!email.length > 0) errorFields.push('email');
  if (password.length < 6) errorFields.push('password');

  yield put(validateSuccess(errorFields));
}

export default function* watchRegister() {
  yield all([
    takeLatest(SUBMIT_FORM, onRegister),
    takeLatest(VALIDATE_FORM, onValidate),
  ]);
}
