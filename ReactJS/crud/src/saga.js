import { call, put, takeLatest } from 'redux-saga/effects';
import {getListPostSuccess} from './action';
import {getPostData} from "./components/postAPI";

function* getListPostSaga(action) {
    try {
        const data = yield call(getPostData);
        yield put(getListPostSuccess(data));
    } catch (error) {
//handle error
    }
}

function* postsSaga() {
    yield takeLatest('GET_LIST_POST', getListPostSaga);
}

export default postsSaga;
