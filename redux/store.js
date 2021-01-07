import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import photosReducer from './reducers/photosReducer';

const rootReducer = combineReducers({photosReducer});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
