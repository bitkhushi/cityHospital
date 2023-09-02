import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from '../ActionTypes'
import { logInAPI, resetPasswordAPI, signupAPI } from '../../admin/Common/Apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}
function* loginuser(action) {
    try {
        const user = yield call(logInAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}
function* resetPassword(action) {
    try {
        const user = yield call(resetPasswordAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

//watcher saga
function* signupsaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signupUser)
}
function* loginsaga() {
    yield takeEvery(ActionTypes.LOGIN_USER, loginuser)
}
function* resetpsdsaga() {
    yield takeEvery(ActionTypes.RESET_PASSWORD, resetPassword)
}
export default function* authsaga(){
    yield all([
        signupsaga(),
        loginsaga(),
        resetpsdsaga()
      ])
}


