/**
 * createStore简单实现
 * 原理：传入reducers,再将subscribe、dispatch、getState等函数进行返回，形成一个闭包形式，之后这几个函数就操作闭包的里reducer、state、listener
 * reducer简单理解就是传入前一个状态以及一个动作，然后返回一个新的状态
 */
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            };  
        default:
            break;
    }
}

function createStore(reducer, initialState) {
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

    return {
        subscribe,
        dispatch,
        getState
    }
}

let store = createStore(reducer, {
    other: 'other',
    count: 0
});

store.subscribe(() => {
    console.log('监听成功');
    console.log(store.getState());
})

store.dispatch({
    type: 'add'
})
store.dispatch({
    type: 'add'
})
store.dispatch({
    type: 'add'
})
store.dispatch({
    type: 'decrement'
})