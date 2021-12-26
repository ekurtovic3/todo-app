import React, { useState } from "react";
import Form from './Form'
import TodoList from './TodoList';


const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        { title: "Title 1", description: "Short description 1", complete: false },
        { title: "Title 2", description: "Short description 2", complete: false },
        { title: "Title 3", description: "Short description 3", complete: true },
    ]);

    function add(todo) {
        const newList = [...todoList, todo];
        setTodoList(newList);
    }

    function deleteToDo(todo) {
        const filteredArray = todoList.filter((element) => (element.title !== todo.title || element.description !== todo.description));
        setTodoList(filteredArray);
    }
    
    function complete(todo) {
        const newList = [...todoList];
        for (let i = 0, l = newList.length; i < l; ++i) {
            if (newList[i].title === todo.title && newList[i].description === todo.description) {
                newList[i].complete = true;
                break;
            }
        }
        setTodoList(newList);
    }

    return (
        <>
            <div className='todoapp'>
                <h1>TO-DO</h1>
                <Form addTodo={add} />
                <TodoList initialList={todoList} complete={complete} deleteTodo={deleteToDo} />
            </div>
        </>
    );
}

export default TodoApp;