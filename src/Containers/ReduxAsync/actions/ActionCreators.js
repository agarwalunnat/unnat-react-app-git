export const getTodos = () => {
    // ----- BEFORE ADDING REDUX THUNK
    // Only sync calls possible
    // return {
    //     type: 'GET_TODO',
    //     todos: [{ title: 'a' }, { title: 'b' }]
    // };

    // ----- AFTER ADDING REDUX THUNK
    // Example #1
    // return (dispatch) => {
    //     setTimeout(() => {
    //         return dispatch({
    //             type: 'GET_TODO',
    //             todos: [{ title: 'a' }, { title: 'b' }],
    //         });
    //     }, 1000);
    // };
    
    // Example #2
    return (dispatch, getState) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log('Old state of application', getState());
                return dispatch({
                    type: 'GET_TODO',
                    todos: json.splice(0, 10),
                });
            });
    };
}
