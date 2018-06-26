import React from 'react';

class NewTodoForm extends React.Component {
    state = {
        task: ''
    }
    handleSubmit = e => {
        e.preventDefault()
        if(e.target.task.value == '') {
            return alert("form is empty")
        }
        this.props.handleSubmit(this.state.task);
        this.setState({task: ''})
        this.props.history.push('/todos')
        
    }
    handleChange = e => {
        const task = e.target.value;
        this.setState({
            task
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Task</label>
                    <input  value={this.state.task} onChange={this.handleChange} type="text" name='task' id='task'/>
                    <button type='submit'>Add</button>
                </form>                
            </div>
        )
    }
}
export default NewTodoForm;