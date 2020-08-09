import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';

const initialState = {};

const useCreateStore = (history: History) => {
    const middleWare = [routerMiddleware(history), thunk];
    return (
        process.env.NODE_ENV === 'production' ? (
            createStore(rootReducer(history), initialState, applyMiddleware(...middleWare))
        ) : (
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (
                createStore(rootReducer(history), initialState, compose(applyMiddleware(...middleWare), (window as any).__REDUX_DEVTOOLS_EXTENSION__()))
            ) : (
                createStore(rootReducer(history), initialState, applyMiddleware(...middleWare))
            )
        )
    )
};

export default useCreateStore;