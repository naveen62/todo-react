import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {addTodo, removeTodo} from './actions'
import {Route} from 'react-router-dom';
import NewTodoForm from './NewTodoForm';

class TodoList extends React.Component {
     
    handleRemoveTodo = (id) => {
        this.props.dispatch(removeTodo(id))
    }
    handleAdd = (val) => {
        this.props.dispatch(addTodo(val));
    }
    render() {
        return(
        <div>
            <Route path='/todos/new' exact component={(props) => <NewTodoForm {...props}
             handleSubmit={this.handleAdd} />} />
            <Route exact path='/todos' component={() =><div> <ul>
                {this.props.todos.map((todo, i) => <Todo handleRemoveTodo={this.handleRemoveTodo} 
                todo={todo} key={i} />)} 
            </ul></div>} />          
        </div>            
        )
    }
}
const mapStateToProps = (state) => {
    return{
        todos: state.todos
    }
}
export default connect(mapStateToProps)(TodoList)