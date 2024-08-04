import React from 'react'

const TodoList = ({todos,removeItem,editItem}) => {
  return (
    <div className='flex flex-col gap-3'>
        {todos.map((item,index)=>{
            return(
                <div key={index} className='flex gap-3'>
                    <h1 className='w-72 p-2 border border-gray-400 '>{item}</h1>
                    <button className='bg-blue-400 py-2 px-4 text-white' onClick={()=>editItem(index)}>Edit</button>
                    <button className='bg-red-400 py-2 px-4 text-white' onClick={()=>removeItem(index)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList