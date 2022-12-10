import { Button, Card, CardBody, CardHeader } from '@material-tailwind/react'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import EditWord from './EditWord'
import { useAppSelector } from './store/store'
import {
  addTemporaryText,
  addTemporaryTitle,
  editWordOpen,
  emptyTemporaries,
  removeTAnswer,
  removeTVariant,
} from './store/actions'

const AddVariants = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [wordIndexToEdit, setWordIndexToEdit] = useState(0)
  const { state } = useLocation()
  useEffect(() => {
    dispatch(addTemporaryTitle(state.title))
    dispatch(addTemporaryText(state.text.split(' ')))
  }, [])

  const isOpenModal = useAppSelector(
    (state) => state.addVariant.editVariantOpen
  )
  let title = useAppSelector<string>((state) => state.addVariant.title)
  let text = useAppSelector<string[]>((state) => state.addVariant.text)
  let variants = useAppSelector((state) => state.addVariant.variants)
  let answers = useAppSelector<string[]>((state) => state.addVariant.answers)

  const editWord = (index: number) => {
    dispatch(editWordOpen(true))
    setWordIndexToEdit(index)
  }

  const clearWord = (index: number) => {
    const num = Number(text[index][text[index].indexOf('$') + 1])
    text[index] = text[index].replace(num.toString(), '')
    text[index] = text[index].replace('$', answers[num - 1])
    answers[num - 1] = ''

    dispatch(addTemporaryText(text))
    dispatch(removeTVariant(num))
    dispatch(removeTAnswer(answers))
  }

  const saveNewTest = () => {
    let dictation: object[] =
      JSON.parse(localStorage.getItem('dictation') || '') || []

    dictation.unshift({
      id: new Date().getMilliseconds(),
      title,
      data: {
        text,
        variants,
        answers,
      },
    })

    localStorage.setItem('dictation', JSON.stringify(dictation))
    dispatch(emptyTemporaries())
    navigate('/')
  }

  return (
    <section className="p-16 bg-gray-200 w-screen h-screen">
      <Card className="bg-white shadow-inner shadow-light-green-500">
        <CardHeader className="p-5 italic bg-light-green-50 text-lg font-semibold text-teal-900 w-max">
          {title}
        </CardHeader>
        <CardBody className="w-full h-max p-5 text-4xl font-semibold text-teal-900 text-justify tracking-wider leading-tight">
          <p>
            {text.map((sentence: string, index: number) => {
              return (
                <Fragment key={index}>
                  <button
                    onClick={() =>
                      sentence.includes('$')
                        ? clearWord(index)
                        : editWord(index)
                    }
                    key={index}
                    className={`${
                      sentence.includes('$') ? 'bg-yellow-500' : ''
                    } rounded`}
                  >
                    <span className="text-2xl">{sentence}</span>
                  </button>{' '}
                </Fragment>
              )
            })}
          </p>
        </CardBody>
        {isOpenModal ? <EditWord wordIndex={wordIndexToEdit} /> : <></>}
      </Card>
      <div className="mt-4 mx-10 flex justify-end">
        <Button color="indigo" onClick={saveNewTest}>
          Добавит Новый Тест
        </Button>
      </div>
    </section>
  )
}

export default AddVariants
