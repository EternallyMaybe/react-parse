export default function compose(...funcs) {
    if (funcs.length === 0) return (args) => args; 
    if (funcs.length === 1) {
        return funcs[0]
    }

    return (dispatch) => {
        funcs.forEach(func => {
            dispatch = func(dispatch);
        })
    }
}