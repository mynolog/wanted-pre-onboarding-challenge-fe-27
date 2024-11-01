import type { Todo } from '../../types/todo/TodoTypes'
import { useState, useEffect } from 'react'
import TodoList from '../../components/todos/TodoList'
import Background from '../../components/common/background/Background'
import {
  createTodoService,
  getTodosService,
} from '../../services/todo/todoService'
import CreateTodo from '../../components/todos/CreateTodo'

const Home = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null)

  const getTodos = async () => {
    try {
      const result = await getTodosService()
      if (result) {
        setTodos(result)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const createTodo = async (todo: { title: string; content: string }) => {
    try {
      const result = await createTodoService(todo)
      if (result) {
        await getTodos()
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getTodos().catch((e) => console.error(e))
  }, [])

  return (
    <Background>
      <div className="w-full h-full flex justify-center items-center px-12 py-5 gap-5">
        <CreateTodo onCreateTodo={createTodo} />
        {todos && <TodoList todos={todos} />}
      </div>
    </Background>
  )
}

export default Home
