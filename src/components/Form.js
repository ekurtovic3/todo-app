import React, { useState } from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CustomTextField from './CustomTextField';
const Form = ({addTodo}) => {
    
    const [todo, setTodo] = useState({title:'',description:'',completed:false});
    
    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
      };
    
      const handleSubmit =()=> (event)=>{
        addTodo(todo);
      };
    
    return (
        <>
            <div className='row'>
                <CustomTextField  
                variant="outlined"
                    label='Add title'
                    type='text'
                    name='title'
                    value={todo.title}
                    onChange={handleChange}
                    size='medium'
        
                />
                 <CustomTextField  
                variant="outlined"
                    label='Add description'
                    type='text'
                    name='description'
                    value={todo.description}
                    onChange={handleChange}
                    size='medium'
        
                />
                <div className='add'>
                    {
                        todo.title === '' || todo.description === '' ?
                            <AddCircleOutlineOutlinedIcon
                                fontSize='large'
                                className='icon'
                              
                            />
                            :
                            <AddCircleRoundedIcon
                                fontSize='large'
                                onClick={handleSubmit()}
                                className='icon'
                            />
                    }
                </div>
            </div>
        </>
    );
}
export default Form;