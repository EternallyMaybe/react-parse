/*
 * 主要用到函数柯里化，先每个插件b保存一个Store，然后首个插件传入dispatch
 */
import { combineReducers, createStore } from './combineReducers';
import reducer from './reducer';
// const store = createStore(reducer);
// const next = store.dispatch;

// store.dispatch = action => {
//     console.log('this state', store.getState());
//     next(action);
//     console.log('next state', store.getState());
// }

const loggerMiddleware = store => next => action => {
    console.log('this state', store.getState());
    next(action);
    console.log('next state', store.getState());
}

const exceptionMiddleware = store => next => action => {
    try {
        next(action);
    } catch(e) {
        console.log('错误报告', e);
    }
}

// const logger = loggerMiddleware(store);
// const exception = exceptionMiddleware(store);

// store.dispatch = exception(logger(next));

const applyMiddleware = function(...middlewares) {
    return function addCreateStore(oldCreateStore) {
        return function newStore(reducer, initialState) {
            const store = oldCreateStore(reducer, initialState);
            const chain = middlewares.map(middleware => middleware(store));
            let dispatch = store.dispatch;

            chain.forEach(middleware => {
                dispatch = middleware(dispatch);
            })

            store.dispatch = dispatch;
            return store;
        }
    }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware, exceptionMiddleware));
console.log(store);
store.dispatch({
    type: 'RENAME',
    name: 'name'
});