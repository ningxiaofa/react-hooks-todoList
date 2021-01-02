import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react'

import TdInput from './Input'
import TdList from './List'
import { ACTION_TYPE, IState, ITodo } from './typings'
import { todoReducer } from './reducer'

const initialState: IState = {
    todoList: []
}

const TodoList: FC = (): ReactElement => {

    // https://react.docschina.org/docs/hooks-state.html
    // const [todoList, setTodoList] = useState<ITodo[]>([])

    // useReducer 比 useState 更好的解决方案, 但也有适用条件
    // https://react.docschina.org/docs/hooks-reference.html#usereducer
    const [state, dispatch] = useReducer(todoReducer, initialState)

    // https://react.docschina.org/docs/hooks-effect.html
    useEffect(() => {
        console.log(state.todoList);
    }, [state.todoList])

    // 关于父组件传递props[属性与方法], 父组件更新, 子组件并不需要更新的情况, 函数句柄会重新生成, 不符合性能优化.
    // useCallback()的使用, 在react hooks社区讨论中, 仁者见仁, 智者见智. 但视频作者认为: useCallback只有好处, 建议使用.[即 如果子组件中方法是父组件传递过来, 都用useCallback包裹一下]
    // https://react.docschina.org/docs/hooks-reference.html#usecallback
    const addTodo = useCallback((todo: ITodo): void => {
        // setTodoList(todoList => [...todoList, todo])
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }, [])

    const removeTodo = useCallback((id: number): void => {
     
    }, [])

    const toggleTodo = useCallback((id: number): void => {
       
    }, [])

    return (
        <div className="todo-list">
            {/* 传入临时属性 addTodo={() => {}} todoList={[]} */}
            <TdInput
                addTodo={addTodo}
                todoList={state.todoList}
            />
            <TdList
                todoList={state.todoList}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    )
}

export default TodoList