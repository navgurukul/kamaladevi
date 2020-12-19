import thunk from 'redux-thunk';
import { createStore, combineReducers ,applyMiddleware, compose  } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import authReducer from './reducer/index';


export default () => {
  const store = createStore(
    combineReducers({
      state: authReducer,
      toastr: toastrReducer
    }),
   compose(applyMiddleware(thunk))
  );

  return store;
};
