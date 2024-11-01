import type { Todo } from '../../types/todo/TodoTypes'
import TodoItem from './TodoItem'
import FormTitle from '../common/title/FormTitle'

interface TodoListProps {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="w-1/3 h-4/5 flex flex-col items-center px-8 py-5 rounded-2xl shadow-lg z-50 bg-white gap-5">
      <FormTitle title="할 일 목록" />
      <ul className="w-full flex flex-col gap-2">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

export default TodoList
