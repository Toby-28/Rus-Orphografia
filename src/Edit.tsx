import { Button, Card, CardBody } from '@material-tailwind/react'
import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import RemoveTest from './components/modal/RemoveTest'
import { ITestCard } from './store/dictationReducer'

const Edit = () => {
  let [tests, setTests] = useState<ITestCard[]>([])
  let [idToRemove, setIdToRemove] = useState(0)
  let [openRemoveTestModal, setOpenRemoveTestModal] = useState(false)
  const location = useLocation()
  let { name, card } = location.state
  useEffect(() => {
    const dictation = JSON.parse(localStorage.getItem(card) || '')
    setTests(dictation)
  }, [openRemoveTestModal])

  return (
    <section className="bg-gray-200 w-screen h-screen px-20 py-10">
      <p className="pl-5 text-2xl italic text-teal-900">{name}</p>
      <div className="bg-white shadow-inner hover:shadow-cyan-300 border-2 p-5 pt-10 rounded-xl">
        <section className="grid grid-cols-4">
          {tests.map((test) => {
            return (
              <Fragment key={test.id}>
                <Card
                  className="hover:bg-cyan-200 border-2 mt-5 mr-3"
                  draggable
                >
                  <CardBody className="p-2 flex justify-around cursor-pointer">
                    <p className="text-teal-900 font-semibold">{test.title}</p>
                    <Button
                      className="rounded-full py-0 px-2 text-lg hover:bg-white hover:text-red-700 hover:shadow-red-900"
                      color="red"
                      onClick={() => {
                        setOpenRemoveTestModal(true)
                        setIdToRemove(test.id)
                      }}
                    >
                      x
                    </Button>
                  </CardBody>
                </Card>
              </Fragment>
            )
          })}
        </section>
      </div>
      {openRemoveTestModal ? (
        <RemoveTest
          openModal={setOpenRemoveTestModal}
          idToRemove={idToRemove}
        />
      ) : (
        <></>
      )}
    </section>
  )
}

export default Edit
