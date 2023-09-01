import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootsaga from "./saga/root.saga";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['medicines', 'addtocart']

}

const sagaMiddleware = createSagaMiddleware()

const multimiddleware = [thunk, sagaMiddleware]

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configstore = () => {
    const store = createStore(persistedReducer, applyMiddleware(...multimiddleware));

    let persistor = persistStore(store)

    sagaMiddleware.run(rootsaga)

    return { store, persistor }

}
