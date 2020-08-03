import React from 'react';
import './App.css';
import TodoList from "./components/todolist/TodoList";
import AddNewItemForm from "./components/addNewItemForm/AddNewItemForm";
import {connect} from "react-redux";
import {addTodolist, setTodolists} from "./redux/reducer";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.setTodolists()
    };

    addTodoList = (title) => {
       this.props.addTodolist(title)
    };

    render = () => {
        const todolists = this.props.todolists.map(tl => {
            return <TodoList key={tl.id}
                             id={tl.id}
                             title={tl.title}
                             tasks={tl.tasks}/>
        });

        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
};


const ConnectedApp = connect(mapStateToProps, {setTodolists, addTodolist})(App);
export default ConnectedApp;
