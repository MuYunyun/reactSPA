import React from 'react'
import './index.less'

export default class todoList extends React.Component {
    render() {
        return (
            <div className="todo-box">
                <div className="todo-innerBox">
                    <div className="todo-tab">
                        {/*<FilterLink filter="SHOW_ALL">
                            全部任务
                        </FilterLink>
                        <FilterLink filter="SHOW_ACTIVE">
                            待办任务
                        </FilterLink>
                        <FilterLink filter="SHOW_COMPLETED">
                            已完成任务
                        </FilterLink>*/}
                    </div>
                    {/*<VisibleTodoList />
                    <AddTodo />*/}
                </div>
            </div>
        )
    }
}