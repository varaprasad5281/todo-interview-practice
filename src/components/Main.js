import React, { useState } from 'react'
import TodoList from './TodoList'
const Main = () => {
    const [task, setTask] = useState('');
    const[todo,setTodo]=useState([]);
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(task.trim()===''){
            console.log('Enter something')
            return;
        }
        const allTasks=[...todo,task]
        setTodo(allTasks)
        setTask('')

    }
    const handleRemove=(indexValue)=>{
        const newTodos=todo.filter((todo,index)=>index!==indexValue)
        setTodo(newTodos)
        console.log(todo)

    }
    const handleEdit=(indexValue)=>{
        console.log("This page is not updated!!")

    }
    return (
        <div className='flex justify-center items-center flex-col gap-6'>
            <h1 className='font-bold text-2xl'>This is Todo Application</h1>
            <form className='' onSubmit={handleSubmit}>
                <div className="flex gap-3">
                    <input className='border border-slate-400 p-2 rounded-md w-96' type='text' value={task} placeholder='Enter your task' onChange={handleChange} />
                    <button className='px-5 bg-green-500 rounded-md' type='submit'>Add</button>

                </div>
            </form>
            <TodoList todos={todo} removeItem={handleRemove} editItem={handleEdit}/>


        </div>
    )
}

export default Main;