import { Button } from '@material-tailwind/react'
import React, { FC } from 'react'

interface Props {
  text: string
  doThis?: () => void
}

const RusButton: FC<Props> = ({ text, doThis }) => {
  return (
    <Button
      className="rounded-full bg-white italic shadow-inner text-cyan-800 hover:shadow-cyan-900"
      onClick={doThis}
    >
      {text}
    </Button>
  )
}

export default RusButton
