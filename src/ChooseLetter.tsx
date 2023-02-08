import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from '@material-tailwind/react'
import React, { Fragment, useEffect, useState } from 'react'
import { addAnswer } from './store/actions'
import { IAnswer } from './store/answerDctReducer'
import { useAppDispatch, useAppSelector } from './store/store'

type Props = {
  index: number
  variants: any[]
  answer: string
}

const ChooseLetter: React.FC<Props> = ({ index, variants, answer }) => {
  const dispatch = useAppDispatch()
  const check = useAppSelector((state) => state.checkDct)
  const answers = useAppSelector((state) => state.answerDct)
  const [letter, setLetter] = useState(' ')
  let [letterInputStyle, setLetterInputStyle] = useState(
    'border-dashed bg-orange-50 border-green-900'
  )

  useEffect(() => {
    if (check) {
      const a: IAnswer[] = answers.filter((answer) => {
        return answer.index === index
      })

      a[a.length - 1].isTrue
        ? setLetterInputStyle(
            'border bg-green-50 border-green-900 font-semibold'
          )
        : setLetterInputStyle(
            'border bg-red-50 border-red-900 font-semibold text-red-900'
          )
    }
  }, [check])

  const setLetterAndCheck = (value: string) => {
    setLetter(value)

    if (value === answer) dispatch(addAnswer({ index, isTrue: true }))
    else dispatch(addAnswer({ index, isTrue: false }))
  }

  return (
    <Fragment>
      <Popover
        placement="top"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <PopoverHandler>
          <span
            className={`${letterInputStyle} rounded-lg text-3xl text-teal-900 italic border-2 normal-case px-3 cursor-pointer disabled:`}
          >
            {<>{letter}</>}
          </span>
        </PopoverHandler>
        <PopoverContent className="font-serif bg-none">
          {
            <>
              {variants.map((value, index) => {
                if (!Number(value)) {
                  return (
                    <Button
                      key={index}
                      color="green"
                      variant="text"
                      onClick={() => setLetterAndCheck(value)}
                      className="font-semibold normal-case text-3xl bg-green-50"
                    >
                      {value}
                    </Button>
                  )
                } else return
              })}
            </>
          }
        </PopoverContent>
      </Popover>
    </Fragment>
  )
}

export default ChooseLetter
