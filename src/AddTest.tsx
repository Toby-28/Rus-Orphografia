import { Checkbox, Input, Textarea } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const AddTest = () => {
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  const [c, setC] = useState(false)
  const [d, setD] = useState(false)
  const location = useLocation()
  const { name, card } = location.state

  return (
    <section className="w-screen h-screen bg-gray-200 flex justify-center items-center flex-col">
      <div className="bg-white rounded-xl px-10 py-5 shadow-inner hover:shadow-cyan-300">
        <p className="w-full text-xl p-5 text-teal-900 italic">
          Добавить новый {name}
        </p>
        <Textarea
          label="Нашите Загадко"
          cols={80}
          rows={2}
          className="text-teal-900 text-lg"
        />
        <div className="flex items-center justify-around p-2">
          <Checkbox color="teal" title="Верно" onClick={() => setA(!a)} />
          <Input
            label="Вариант A"
            required
            title="Пожалуста заполните!"
            className="text-teal-900"
          />
        </div>
        <div className="flex items-center justify-around p-2">
          <Checkbox color="teal" title="Верно" onClick={() => setB(!b)} />
          <Input
            label="Вариант B"
            required
            title="Пожалуста заполните!"
            className="text-teal-900"
          />
        </div>
        <div className="flex items-center justify-around p-2">
          <Checkbox color="teal" title="Верно" onClick={() => setC(!c)} />
          <Input
            label="Вариант C"
            required
            title="Пожалуста заполните!"
            className="text-teal-900"
          />
        </div>
        <div className="flex items-center justify-around p-2">
          <Checkbox color="teal" title="Верно" onClick={() => setD(!d)} />
          <Input
            label="Вариант D"
            required
            title="Пожалуста заполните!"
            className="text-teal-900"
          />
        </div>
      </div>
    </section>
  )
}

export default AddTest
