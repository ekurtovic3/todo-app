import React from 'react';
import Todo from './Todo';

const TodoList = ({
    initialList,
    deleteTodo,
    complete
}) => {

    const handleDelete = (todo) => (event) => {
        deleteTodo(todo);
    };
    const handleComplete = (todo) => (event) => {
        complete(todo);
    };

    return (
        <>
            <h2>MY TO-DO LIST</h2>
            {initialList ?
                initialList.map((todo, index) =>
                    <Todo deleteFunction={handleDelete(todo)} complete={handleComplete(todo)} todo={todo} key={index} />
                )
                : ''}

        </>
    );
}
export default TodoList;