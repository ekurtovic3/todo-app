import React from 'react';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const Todo = ({
    todo,
    deleteFunction,
    complete }) => {

    const handleDelete = () => (event) => {deleteFunction(todo);};
    const handleComplete = () => (event) => {complete(todo); };

    return (
        <>
            <div
                className='todo'>

                <li
                    className='list'>
                    <h3 className={todo.complete ? 'complete' : 'pending  '}>{todo.title}</h3>
                    <div className='desc'>
                        <h5 className={todo.complete ? 'complete' : 'pending  '}>{todo.description}</h5>

                        {
                            todo.complete ?
                                <CheckCircleRoundedIcon
                                    className='icon'
                                    onClick={handleComplete()}
                                    fontSize='large'
                                /> :
                                <CheckCircleOutlineRoundedIcon
                                    className='icon'
                                    onClick={handleComplete()}
                                    fontSize='large'
                                />
                        }
                        <>
                            <HighlightOffRoundedIcon
                                className='icon'
                                onClick={handleDelete()}
                                fontSize='large'
                            />
                        </>

                    </div>
                </li>
            </div>
        </>
    );
}
export default Todo;

