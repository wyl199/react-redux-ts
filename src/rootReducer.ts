import { combineReducers } from "redux";
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { homeReducer } from './Home/HomeReducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    router : connectRouter(history),
    home: homeReducer
  })

export default rootReducer;