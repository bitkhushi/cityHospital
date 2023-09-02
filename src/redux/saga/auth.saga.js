import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from '../ActionTypes'
import { signupAPI } from '../../admin/Common/Apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

//watcher saga
function* signupsaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signupUser)
}

export default function* authsaga(){
    yield all([
        signupsaga()
      ])
}


