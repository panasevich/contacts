import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from 'reducers';
import rootSaga from 'saga';


const devtools = (process.env.NODE_ENV === 'development' && window.devToolsExtension) || (() => noop => noop);
const logger = (process.env.NODE_ENV === 'development') ? require('redux-logger').createLogger({
    collapsed: true,
    duration: true,
    diff: true,
    predicate: (getState, action) => action.type !== 'NEW_TRACKING',
    stateTransformer: state => state,
}) : (() => noop => noop);

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const enhancers = [
        applyMiddleware(logger, sagaMiddleware),
        devtools(),
    ];
    const rootReducer = (state, action) => appReducer(state, action);

    const store = createStore(
        rootReducer,
        {},
        compose(...enhancers),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
