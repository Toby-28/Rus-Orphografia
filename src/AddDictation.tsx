import { Input, Textarea } from '@material-tailwind/react'
import React, { ChangeEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import RusButton from './components/RusButton'

const AddDictation = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const toDctVariant = () => {
    navigate('/add-dictation-variants', { state: { title, text } })
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="border-2 p-6 rounded-xl shadow-inner bg-white active:shadow-cyan-300">
        <div className="w-96">
          <p className="text-2xl italic text-teal-900">{state.name}</p>
          <div className="mt-4">
            <Input
              color="teal"
              label="Заголовок"
              name="title"
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <Textarea
            color="teal"
            label="Текст"
            cols={60}
            rows={20}
            name="text"
            onChange={handleTextChange}
          ></Textarea>
        </div>
        <div className="mt-4">
          <RusButton text="Следующий" doThis={toDctVariant} />
        </div>
      </div>
    </section>
  )
}

export default AddDictation
