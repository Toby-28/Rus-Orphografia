import { Button, Card, IconButton } from '@material-tailwind/react'
import React, { FC, Fragment, useEffect, useState } from 'react'
import ChooseLetter from './ChooseLetter'
import { ITestCard } from './store/dictationReducer'
import { useAppDispatch, useAppSelector } from './store/store'
import {
  emptyAnswer,
  emptyCheck,
  emptyTestCard,
  setCheck,
  setTestCardData,
  toNextText,
} from './store/actions'
import { useLocation, useNavigate } from 'react-router-dom'

const Dictation: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [testQuantity, setTestQuantity] = useState(0)
  const check = useAppSelector((state) => state.checkDct)
  const answer = useAppSelector((state) => state.answerDct)
  const testNumber = useAppSelector((state) => state.dictation.number)
  const { state } = useLocation()
  useEffect(() => {
    let card = state.card
    let tests = JSON.parse(localStorage.getItem(card) || '')
    setTestQuantity(tests.length)

    dispatch(setTestCardData(tests[testNumber]))
  }, [testNumber])
  let cards: ITestCard = useAppSelector((state) => state.dictation)
  let texts = cards.data.text
  let variants = cards.data.variants
  let anwers = cards.data.answers

  let splittedTexts = texts.map((text: string) => {
    if (text.includes('$')) return text.split('$')
    return text
  })

  const checkAnswers = () => {
    let done: any = {}
    answer.forEach((a) => {
      done[a.index] = 1
    })

    let count = 0
    anwers.forEach((a, index) => {
      if (done[index + 1]) {
        count++
      }
    })

    count === anwers.length
      ? dispatch(setCheck(true))
      : alert('Пожалуйста, выполните их все!')
  }

  const toHome = () => {
    dispatch(emptyAnswer())
    dispatch(emptyCheck())
    dispatch(emptyTestCard())
    navigate('/')
  }

  const nextTest = () => {
    dispatch(emptyAnswer())
    dispatch(toNextText(testNumber + 1))
    dispatch(emptyCheck())
  }

  return (
    <Card className="mx-16 my-7 shadow-2xl shadow-green-500 flex flex-col px-5 bg-gray-200">
      <div className="flex justify-between items-center border-b-2 border-blue-100 p-5">
        <IconButton
          variant="outlined"
          className="bg-gray-200 rounded-full"
          size="lg"
          color="gray"
          onClick={toHome}
        >
          <svg
            className="h-8 w-8 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </IconButton>
        <span className="number text-3xl text-green-500">
          {testNumber + 1 + '/' + testQuantity}
        </span>

        {check ? (
          <Button
            className="text-blue-gray-50 font-serif bg-teal-700 hover:shadow-2xl border-2 border-light-green-500 text-lg rounded-2xl"
            onClick={() => {
              if (testNumber + 1 !== testQuantity) nextTest()
            }}
          >
            Дальше
          </Button>
        ) : (
          <Button
            className="text-blue-gray-50 font-serif bg-teal-700 hover:shadow-2xl border-2 border-light-green-500 text-lg rounded-2xl"
            onClick={checkAnswers}
          >
            Проверьте
          </Button>
        )}
      </div>
      <div className="mx-16 mt-5 flex flex-col items-center">
        <p className="w-full h-max  text-justify text-teal-900 text-3xl italic font-serif tracking-wider leading-[1.8]">
          {
            <Fragment>
              {splittedTexts.map(
                (splittedText: string | string[], index: React.Key) => {
                  if (Array.isArray(splittedText)) {
                    splittedText[2] = splittedText[1].slice(1)
                    splittedText[1] = splittedText[1].slice(0, 1)

                    return (
                      <Fragment key={index}>
                        {splittedText.map((partText, index) => {
                          let i = Number(partText)
                          if (i) {
                            const index = variants.findIndex(
                              (vari: any[]) => vari[0] === i
                            )
                            const variant = variants[index]
                            const answer = anwers[index]

                            return (
                              <ChooseLetter
                                key={index}
                                index={i}
                                variants={variant}
                                answer={answer}
                              />
                            )
                          } else return partText
                        })}
                      </Fragment>
                    )
                  } else return ' ' + splittedText + ' '
                }
              )}
            </Fragment>
          }
        </p>
        <div className="py-5">
          <p className="text-2xl font-serif">
            {'"'} {cards.title} {'"'}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default Dictation
