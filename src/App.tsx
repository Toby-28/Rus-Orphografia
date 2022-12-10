import React from 'react'
import Card from './Card'
import { Card as MCard } from '@material-tailwind/react'

function App() {
  return (
    <MCard className="px-10 pt-5 w-screen h-screen">
      <div className="flex flex-col shadow-2xl p-10 shadow-green-500 bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center border-b-2 border-blue-100 w-full">
            <p className="text-7xl text-teal-900 italic font-serif font-semibold">
              Орфография
            </p>
          </div>
          <p className="m-7 text-green-800 text-3xl">
            Проверьте свое знание русского языка
          </p>
        </div>
        <div className="flex justify-between items-center px-5">
          <Card name={'Диктант'} quantity={200} card="dictation" />
          <Card name={'Тест'} quantity={100} card="trial" disabled />
          <Card
            name={'Русская литература'}
            quantity={150}
            card="literature"
            disabled
          />
        </div>
      </div>
    </MCard>
  )
}

export default App
