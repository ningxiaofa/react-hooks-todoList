import React from 'react'
import TdInput from './Input'
import TdList from './List'

const TodoList = () => {
    return (
        <div className="todo-list">
            {/* 传入临时属性 addTodo={() => {}} todoList={[]} */}
            <TdInput addTodo={() => {}} todoList={[]}/>
            <TdList />
        </div>
    )
}

export default TodoList