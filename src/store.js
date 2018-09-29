import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// const loggerMiddleware = createLogger();
import { articleReducer, articleInfoReducer } from './reducers/ArticleReducer';
const reducers = combineReducers({articleReducer, articleInfoReducer});

export default function configureStore() {
    return createStore(
        reducers,
        applyMiddleware(thunkMiddleware)
        // applyMiddleware(loggerMiddleware, thunkMiddleware)
    );
};