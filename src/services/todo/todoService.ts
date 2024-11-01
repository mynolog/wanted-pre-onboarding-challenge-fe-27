// import { isAxiosError } from 'axios'
import type { Todo } from '../../types/todo/TodoTypes'
import api from '../api'
import { isAxiosError } from 'axios'

interface TodoRequest {
  title: string
  content: string
}

interface TodoResponse {
  data: {
    data: Todo[]
  }
  status: number
}

const TODOS = '/todos'

export const getTodosService = async () => {
  try {
    const response: TodoResponse = await api.get(TODOS)
    if (response.status === 200) {
      return response.data.data
    }
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      console.error(e.response)
      throw new Error(e.response.data.details)
    }
  }
}

// export const getTodoByIdService = async () => {}

export const createTodoService = async ({ title, content }: TodoRequest) => {
  try {
    const response: TodoResponse = await api.post(TODOS, {
      title,
      content,
    })
    console.log(response)
    return response.data
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      console.error(e.response)
      throw new Error(e.response.data.details)
    }
  }
}
