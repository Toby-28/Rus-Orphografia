import React, { Dispatch, FC, SetStateAction } from 'react'
import { useLocation } from 'react-router-dom'
import { ITestCard } from '../../store/dictationReducer'
import RusButton from '../RusButton'

interface Props {
  idToRemove: number
  openModal: Dispatch<SetStateAction<boolean>>
}

const RemoveTest: FC<Props> = ({ openModal, idToRemove }) => {
  const location = useLocation()
  const { card } = location.state

  const removeTest = (id: number) => {
    let dictations: ITestCard[] = JSON.parse(localStorage.getItem(card) || '')
    dictations = dictations.filter((dictation) => dictation.id !== id)
    localStorage.setItem(card, JSON.stringify(dictations))
    openModal(false)
  }

  return (
    <section className="bg-gray-500 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white p-10 rounded-2xl flex flex-col justify-center items-center">
        <p className="text-xl text-red-900 font-semibold">
          Вы хотите удалит етот тест?
        </p>
        <div className="mt-5 w-full flex justify-around">
          <RusButton text="Нет" doThis={() => openModal(false)} />
          <RusButton text="Да" doThis={() => removeTest(idToRemove)} />
        </div>
      </div>
    </section>
  )
}

export default RemoveTest
