export const getTodos = () => {
    return {
        type: 'GET_TODO',
        todos: [{ title: 'a' }, { title: 'b' }]
    };
}
