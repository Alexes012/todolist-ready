import React from 'react';
import './Todolist.css';
import TodoListTasks from ".././TodoListTasks";
import TodoListFooter from ".././TodoListFooter";
import TodoListTitle from ".././TodoListTitle";
import AddNewItemForm from ".././addNewItemForm/AddNewItemForm";
import {connect} from "react-redux";
import {
    addTask, deleteTask, deleteTodolist,
    setTasks, updateTask, updateTodolistTitle
} from "../../redux/reducer";

class TodoList extends React.Component {

    state = {
        filterValue: "All"
    };

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.setTasks(this.props.id)
    };

    addTask = (newText) => {
        this.props.addTask(newText, this.props.id)
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeTask = (taskId, obj) => {
        let changedTask = this.props.tasks.find(task => {
            return task.id === taskId
        });
        let task = {...changedTask, ...obj};

        this.props.updateTask(taskId, obj, this.props.id, task)
    };

    changeStatus = (taskId, status) => {
        this.changeTask(taskId, {status: status});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    };

    deleteTodolist = () => {
       this.props.deleteTodolist(this.props.id)
    };

    deleteTask = (taskId) => {
        this.props.deleteTask(taskId, this.props.id)
    };

    updateTitle = (title) => {
        this.props.updateTodolistTitle(title, this.props.id)
    };

    render = () => {
        let {tasks = []} = this.props;
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <div className="wrapper">
                        <TodoListTitle title={this.props.title} updateTitle={this.updateTitle}/>
                        <button onClick={this.deleteTodolist}>X</button>
                    </div>
                    <AddNewItemForm addItem={this.addTask}/>
                </div>

                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               deleteTask={this.deleteTask}
                               tasks={tasks.filter(t => {
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return t.status === 0;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.status === 2;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTask(newTask, todolistId) {
//             dispatch(addTaskAC(newTask, todolistId));
//         },
//         setTasks(tasks, todolistId) {
//             dispatch(setTasksAC(tasks, todolistId));
//         },
//         updateTask(taskId, obj, todolistId) {
//             const action = updateTaskAC(taskId, obj, todolistId);
//             dispatch(action);
//         },
//         deleteTodolist: (todolistId) => {
//             const action = deleteTodolistAC(todolistId);
//             dispatch(action)
//         },
//         deleteTask: (taskId, todolistId) => {
//             const action = deleteTaskAC(todolistId, taskId);
//             dispatch(action)
//         },
//         updateTodolistTitle: (title, todolistId) => {
//             const action = updateTodolistTitleAC(todolistId, title);
//             dispatch(action)
//         }
//     }
// };

const ConnectedTodolist = connect(null, {setTasks, addTask, updateTask, deleteTodolist, deleteTask, updateTodolistTitle})(TodoList);
export default ConnectedTodolist;

