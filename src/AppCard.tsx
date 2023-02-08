import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@material-tailwind/react'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import RusButton from './components/RusButton'

interface Links {
  header: string
  add: string
}

interface Props {
  name: string
  quantity: number
  card: string
  link?: Links
  disabled?: boolean
}

const AppCards: FC<Props> = ({
  name,
  quantity,
  card,
  disabled,
  link = { header: '', add: '' },
}) => {
  const navigate = useNavigate()

  const toTest = () => {
    if (!disabled) navigate(link.header, { state: { name, card } })
  }

  const toAddTest = () => {
    if (!disabled) navigate(link.add, { state: { name, card } })
  }

  const toEditTest = () => {
    if (!disabled) navigate('edit', { state: { name, card } })
  }

  return (
    <Card className="border-4 border-gray-300 mt-10" draggable>
      <CardHeader
        className="cursor-pointer p-5 border flex flex-col items-center"
        onClick={toTest}
      >
        <p className="text-3xl text-teal-900 font-serif font-semibold italic">
          {name}
        </p>
        <span className="text-green-500">{quantity}шт.</span>
      </CardHeader>
      <CardBody className="flex items-center justify-center">
        <img src="assets/cards.jpg" className="object-contain h-48 w-80" />
      </CardBody>
      <CardFooter className="flex justify-between">
        <RusButton text={'Добавит'} doThis={toAddTest} />
        <RusButton text="Изменит" doThis={toEditTest} />
      </CardFooter>
    </Card>
  )
}

export default AppCards
