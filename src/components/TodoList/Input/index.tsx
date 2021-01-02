import React, { FC, ReactElement, useRef } from 'react'
import { ITodo } from '../typings'
interface IProps {
    addTodo: (toDo: ITodo) => void;
    todoList: ITodo[];
}

// 函数组件本身类型是 function component
const TdInput: FC<IProps> = ({
    addTodo,
    todoList
}): ReactElement => {

    const inputRef = useRef<HTMLInputElement>(null)
    // console.log(inputRef.current?.value)

    const addItem = (): void => {
        // !表明肯定有值
        const val: string = inputRef.current!.value.trim()

        if (val.length) {

            // 排除已存在
            const isExist = todoList.find(todo => todo.content === val)

            if (isExist) {
                alert('已存在该项!')
                return
            }

            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false,
            })

            // 清空输入框, 应只能用!, 不用 ! 或 使用 ? 均会报错!
            inputRef.current!.value = ''
        }
    }

    return (
        <div className="td-input">
            <input type="text" placeholder="请输入待办项" ref={ inputRef } />
            {/* onClick的写法有两种: 方式一如下, 方式二:  onClick={ () => {addItem()} } */}
            <button onClick={ addItem }>增加</button>
        </div>
    )
}

/**
 * 接口数据类型 props
 * {
 *  id: number new Date().getTime()
 *  content: string
 *  completed: boolean
 * }
 */
export default TdInput