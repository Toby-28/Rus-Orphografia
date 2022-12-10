import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@material-tailwind/react'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  name: string
  quantity: number
  card: string
  disabled?: boolean
}

const Cards: FC<Props> = ({ name, quantity, card, disabled }) => {
  const navigate = useNavigate()

  const toTest = () => {
    if (!disabled) {
      navigate('test', { state: { card } })
    }
  }

  const toAddTest = () => {
    if (!disabled) {
      navigate('add-test', { state: { name } })
    }
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
      <CardFooter>
        <Button onClick={toAddTest}>+</Button>
      </CardFooter>
    </Card>
  )
}

export default Cards
