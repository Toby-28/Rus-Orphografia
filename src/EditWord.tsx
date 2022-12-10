import { Input, Radio } from '@material-tailwind/react'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  addTemporaryAnswer,
  addTemporaryText,
  addTemporaryVariant,
  editWordOpen,
  increaseEWI,
} from './store/actions'
import { useAppSelector } from './store/store'

type Props = {
  wordIndex: number
}

const EditWord: FC<Props> = ({ wordIndex }) => {
  let text = useAppSelector((state) => state.addVariant.text)
  const word = useAppSelector((state) => state.addVariant.text[wordIndex])
  const editWordIndex = useAppSelector(
    (state) => state.addVariant.editWordIndex
  )
  const [editableWord, setEditableWord] = useState<string>(word)
  const dispatch = useDispatch()

  const [variantA, setVariantA] = useState(' ')
  const [variantB, setVariantB] = useState(' ')
  const [truth, setTruth] = useState('')

  const setTrueVariant = (truth: number) => {
    truth === 1 ? setTruth(variantA) : setTruth(variantB)
  }

  const save = () => {
    text[wordIndex] = editableWord.replace('$', '$' + editWordIndex)
    dispatch(addTemporaryText(text))
    dispatch(addTemporaryVariant([editWordIndex, variantA, variantB]))
    dispatch(addTemporaryAnswer(truth))
    dispatch(increaseEWI(editWordIndex + 1))
    dispatch(editWordOpen(false))
  }

  return (
    <>
      <div className="bg-gray-500 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="bg-white px-16 py-14 rounded-md text-center">
          <h1 className="text-xl mb-4 font-bold text-gray-600">
            Поставьте знак $ вместо вырезанной буквы
          </h1>
          <div className="mb-4 flex">
            <Input
              value={editableWord}
              onChange={(e) => setEditableWord(e.target.value)}
              className="text-xl"
            />
            <Radio name="variant" onChange={() => setTrueVariant(1)} />
            <Input
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setVariantA(e.currentTarget.value)
              }
              label="Вариант 1"
            />
            <Radio name="variant" onClick={() => setTrueVariant(2)} />
            <Input
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setVariantB(e.currentTarget.value)
              }
              label="Вариант 2"
            />
          </div>
          <button
            className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
            onClick={() => dispatch(editWordOpen(false))}
          >
            Отмена
          </button>
          <button
            className="bg-teal-900 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
            onClick={() => save()}
          >
            Да
          </button>
        </div>
      </div>
    </>
  )
}

export default EditWord
