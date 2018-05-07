import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'; //ska jag ha denna?

// import the root reducer
import rootReducer from './reducers/index' //filen finns inte


// import comments from './ 

const defaultState = {
    posts,
    comments
};

const store = createStroe(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
