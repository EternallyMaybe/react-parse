/**
 * combineReducers实现
 * 原理：一个闭包，将所有reducer都执行一次，并将每个reducer返回结果都放在nextState这样一个对象中，然后将结果保存在createStore中，
 * 下次再次调用相同reducer时，会从createStore保存的state中进行查找，之后将state传入reducer中
*/

let initialState = {
    countInfo: {
        count: 1
    },
    listInfo: {
        arr: [1, 2, 3]
    }
}

export function countReducer(state = initialState.countInfo, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            };  
        default:
            return state;
    }
}

function listReducer(state = initialState.listInfo, action) {
    switch (action.type) {
        case 'LIST_ADD':
            return {
                ...state,
                arr: arr.push(action.data)
            };
        case 'LIST_DECREASE':
            return {
                ...state,
                arr: arr.slice(1)
            };  
        default:
            break;
    }
}

export function combineReducers(reducers) {
    let keys = Object.keys(reducers);

    return function(prevAllState = {}, action) {
        const nextState = {};

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let prevStateForKey = prevAllState[key];
            let nextStateForKey = reducers[key](prevStateForKey, action);

            nextState[key] = nextStateForKey;
        }

        return nextState;
    }
}

export function createStore(reducer, initialState, enhancer) {
    if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
        enhancer = initialState;
        initialState = undefined;
    }

    if (typeof enhancer === 'function') {
        return enhancer(createStore)(reducer, initialState);
    }

    let state = initialState;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action){
        state = reducer(state, action);
        for (let i = 0; i < listeners.length; i++) {
            listeners[i](state);
        }
    }

    function getState() {
        return state;
    }

    dispatch({ type: Symbol() })

    return {
        subscribe,
        dispatch,
        getState
    }
}

// let reducers = combineReducers({
//     countReducer,
//     listReducer
// })

// let store = createStore(reducers);

// store.subscribe((state) => {
//     console.log(state)
// })
// store.dispatch({
//     type: 'ADD'
// })