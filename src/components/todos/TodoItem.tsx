import type { Todo } from '../../types/todo/TodoTypes'

interface TodoItemProps {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className="w-full h-12 flex items-center border rounded-lg px-4 py-2">
      {todo.title}
    </li>
  )
}

export default TodoItem
