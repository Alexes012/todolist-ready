import {api} from "../api/api";

export const ADD_TODOLIST_SUCCESS = "TodoList/Reducer/ADD-ADD_TODOLIST_SUCCESS";
export const ADD_TODOLIST_ERROR = "TodoList/Reducer/ADD_TODOLIST_ERROR";
export const SET_TODOLISTS_SUCCESS = "TodoList/Reducer/SET_TODOLISTS_SUCCESS";
export const SET_TODOLISTS_ERROR = "TodoList/Reducer/SET_TODOLISTS_ERROR";
export const SET_TASKS_SUCCESS = "TodoList/Reducer/SET_TASKS_SUCCESS";
export const SET_TASKS_ERROR = "TodoList/Reducer/SET_TASKS_ERROR";
export const DELETE_TODOLIST_SUCCESS = "TodoList/Reducer/DELETE_TODOLIST_SUCCESS";
export const DELETE_TODOLIST_ERROR = "TodoList/Reducer/DELETE_TODOLIST_ERROR";
export const DELETE_TASK_SUCCESS = "TodoList/Reducer/DELETE_TASK_SUCCESS";
export const DELETE_TASK_ERROR = "TodoList/Reducer/DELETE_TASK_ERROR";
export const UPDATE_TODOLIST_TITLE_SUCCESS = "TodoList/Reducer/UPDATE_TODOLIST_TITLE_SUCCESS";
export const UPDATE_TODOLIST_TITLE_ERROR = "TodoList/Reducer/UPDATE_TODOLIST_TITLE_ERROR";
export const ADD_TASK_SUCCESS = "TodoList/Reducer/ADD_TASK_SUCCESS";
export const ADD_TASK_ERROR = "TodoList/Reducer/ADD_TASK_ERROR";
export const UPDATE_TASK_SUCCESS = "TodoList/Reducer/UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_ERROR = "TodoList/Reducer/UPDATE_TASK_ERROR";


const initialState = {
    todolists: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOLISTS_SUCCESS:
            return {
                ...state,
                todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            };
        case SET_TODOLISTS_ERROR:
            return {
                ...state, error: "error"
            };
        case ADD_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: [action.newTodolist, ...state.todolists]
            };
        case ADD_TODOLIST_ERROR:
            return {
                ...state, error: "error"
            };
        case SET_TASKS_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks}
                    }
                })
            };
        case SET_TASKS_ERROR:
            return {
                ...state, error: "error"
            };
        case DELETE_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            };
        case DELETE_TODOLIST_ERROR:
            return {
                ...state, error: "error"
            };
        case UPDATE_TODOLIST_TITLE_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) return tl;
                    else return {...tl, title: action.title}
                })
            };
        case UPDATE_TODOLIST_TITLE_ERROR:
            return {
                ...state, error: "error"
            };
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            };
        case DELETE_TASK_ERROR:
            return {
                ...state, error: "error"
            };
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [action.newTask, ...tl.tasks]}
                    } else {
                        return tl
                    }
                })
            };
        case ADD_TASK_ERROR:
            return {
                ...state, error: "error"
            };
        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id !== action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            };
        case UPDATE_TASK_ERROR:
            return {
                ...state, error: "error"
            };

        default:
            return state
    }
};

export default reducer;

// Action creators
export const updateTaskSuccess = (taskId, obj, todolistId) => ({type: UPDATE_TASK_SUCCESS, taskId, obj, todolistId});
export const updateTaskError = () => ({type: UPDATE_TASK_ERROR});
export const deleteTodolistSuccess = (todolistId) => ({type: DELETE_TODOLIST_SUCCESS, todolistId: todolistId});
export const deleteTodolistError = () => ({type: DELETE_TODOLIST_ERROR});
export const deleteTaskSuccess = (taskId, todolistId) => ({type: DELETE_TASK_SUCCESS, taskId, todolistId});
export const deleteTaskError = () => ({type: DELETE_TASK_ERROR});
export const updateTodolistTitleSuccess = (title, todolistId) => ({type: UPDATE_TODOLIST_TITLE_SUCCESS, title, todolistId});
export const updateTodolistTitleError = () => ({type: UPDATE_TODOLIST_TITLE_ERROR});
export const addTaskSuccess = (newTask, todolistId) => ({type: ADD_TASK_SUCCESS, newTask, todolistId});
export const addTaskError = () => ({type: ADD_TASK_ERROR});
export const setTasksSuccess = (tasks, todolistId) => ({type: SET_TASKS_SUCCESS, tasks, todolistId});
export const setTasksError = () => ({type: SET_TASKS_ERROR});
export const addTodolistSuccess = (newTodolist) => ({type: ADD_TODOLIST_SUCCESS, newTodolist});
export const addTodolistError = () => ({type: ADD_TODOLIST_ERROR});
export const setTodolistsSuccess = (todolists) => ({type: SET_TODOLISTS_SUCCESS, todolists});
export const setTodolistsError = () => ({type: SET_TODOLISTS_ERROR});

//Thunk
export const setTodolists = () => (dispatch, getState) => {
    api.getTodolists()
        .then(res => {
        dispatch(setTodolistsSuccess(res.data))
    })
        .catch((error) => {
            dispatch(setTodolistsError(error))
        })
};
export const addTodolist = (title) => (dispatch) => {
    api.createTodolist(title)
        .then(res => {
            dispatch(addTodolistSuccess(res.data.data.item));
        })
        .catch((error) => {
            dispatch(addTodolistError(error))
        })
};
export const setTasks = (taskId) => (dispatch) => {
    api.getTasks(taskId)
        .then(res => {
            dispatch(setTasksSuccess(res.data.items, taskId));
        })
        .catch((error) => {
            dispatch(setTasksError(error))
        })
};
export const addTask = (newText, taskId) => (dispatch) => {
    api.createTask(newText, taskId)
        .then(res => {
        dispatch(addTaskSuccess(res.data.data.item, taskId))
    })
        .catch((error) => {
            dispatch(addTaskError(error))
        })
};
export const updateTask = (taskId, obj, todolistId, task) => (dispatch) => {

    api.updateTask(taskId, todolistId, task)
        .then(res => {
            dispatch(updateTaskSuccess(taskId, obj, todolistId))
        })
        .catch((error) => {
            dispatch(updateTaskError(error))
        })
};
export const deleteTodolist = (todolistId) => (dispatch) => {
    api.deleteTodolist(todolistId)
        .then(res => {
            dispatch(deleteTodolistSuccess(todolistId))
        })
        .catch((error) => {
            dispatch(deleteTodolistError(error))
        })
};
export const deleteTask = (taskId, todolistId) => (dispatch) => {
    api.deleteTask(taskId, todolistId)
        .then(res => {
            dispatch(deleteTaskSuccess(taskId, todolistId))
        })
        .catch((error) => {
            dispatch(deleteTaskError(error))
        })
};
export const updateTodolistTitle = (title, todolistId) => (dispatch) => {
    api.updateTodolistTitle(title, todolistId)
        .then(res => {
                dispatch(updateTodolistTitleSuccess(title, todolistId))
        })
        .catch((error) => {
            dispatch(updateTodolistTitleError(error))
        })
};

