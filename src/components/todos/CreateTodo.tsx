import type { MouseEvent } from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import CommonInput from '../common/input/CommonInput'
import CommonButton from '../common/button/CommonButton'
import FormTitle from '../common/title/FormTitle'

interface CreateTodoProps {
  onCreateTodo: (todo: { title: string; content: string }) => Promise<void>
}

const CreateTodo = ({ onCreateTodo }: CreateTodoProps) => {
  const [responseError, setResponseError] = useState('')
  const { form, handleFormChange, resetForm } = useForm(
    {
      title: '',
      content: '',
    },
    setResponseError,
  )

  const handleResetForm = () => {
    resetForm()
  }

  const handleCreateTodoSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { title, content } = form
    const todoForm = {
      title,
      content,
    }
    try {
      await onCreateTodo(todoForm)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="w-1/3 h-4/5 flex flex-col items-center px-8 py-5 rounded-2xl shadow-lg z-50 bg-white gap-5">
      <form className="w-full flex flex-col items-center">
        <FormTitle title="할 일 추가" />
        <div className="w-full flex flex-col">
          <CommonInput
            name="title"
            value={form.title}
            onChange={handleFormChange}
            placeholder="제목"
          />
          <CommonInput
            name="content"
            value={form.content}
            onChange={handleFormChange}
            placeholder="내용"
          />
        </div>
        <div className="h-full flex justify-center items-center gap-3 mt-2">
          <CommonButton
            type="submit"
            width="80px"
            height="43px"
            fontSize="0.75rem"
            onClick={handleCreateTodoSubmit}
          >
            추가하기
          </CommonButton>
          <CommonButton
            width="80px"
            height="43px"
            fontSize="0.75rem"
            bgColor="#FCA5A5"
            onClick={handleResetForm}
          >
            비우기
          </CommonButton>
        </div>
      </form>
    </div>
  )
}

export default CreateTodo
