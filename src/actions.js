const handleAdd = (todo = '') => ({
    type: 'ADD_TODO',
    todo
})
const handleRemove = (id) => ({
    type: 'REMOVE_TODO',
    id
})
const handleTodos = (data) => ({
    type: 'GET_TODOS',
    data
})
const getTodos = () => {
    return (dispatch) => {
        return fetch('http://localhost:3002/api/todos')
                    .then(res => res.json())
                    .then(data => dispatch(handleTodos(data)))
                    .catch(err => console.log(err))
    }
}
const addTodo = (task) => {
    return dispatch => {
        return fetch('http://localhost:3002/api/todos', {
            method: 'POST',
            headers: new Headers({
                'content-Type': 'application/json'
            }),
            body: JSON.stringify({task})
        })
    .then(res => res.json())
    .catch(data => dispatch(handleAdd(data)))
    .catch(err => console.log(err))
    }
}
const removeTodo = id => {
    return dispatch => {
        return  fetch(`http://localhost:3002/api/todos/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => dispatch(handleRemove(id)))
        .catch(err => console.log(err))
    }
}
export{removeTodo, addTodo, getTodos}