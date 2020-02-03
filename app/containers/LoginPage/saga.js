import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import firebase from 'firebase/app';
import { makeSelectLoginEmail, makeSelectLoginPassword } from './selectors';
import { SUBMIT_FORM, VALIDATE_FORM } from './constants';
import 'firebase/firestore';
import { validateSuccess } from './actions';

export function* onLogin() {
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

export default function* watchLogin() {
  yield all([
    takeLatest(SUBMIT_FORM, onLogin),
    takeLatest(VALIDATE_FORM, onValidate),
  ]);
}
