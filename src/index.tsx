import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@material-tailwind/react'
import Dictation from './Dictation'
import Result from './Result'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import AddDictation from './AddDictation'
import AddDictationVariants from './AddDictationVariants'
import Edit from './Edit'
import AddTest from './AddTest'

// Styles
import './assets/tailwind.css'
import Test from './Test'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const doesExistDictation = localStorage.getItem('dictation')
// const doesExistTest = localStorage.getItem('test')

// if (!doesExistDictation) {
//   localStorage.setItem('dictation', JSON.stringify([]))
// }
// if (!doesExistTest) {
//   localStorage.setItem('test', JSON.stringify([]))
// }

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Routes>
              <Route index element={<App />} />
              <Route element={<Dictation />} path="/dictation" />
              <Route element={<Result />} path="/result" />
              <Route element={<AddDictation />} path="/add-dictation" />
              <Route
                element={<AddDictationVariants />}
                path="/add-dictation-variants"
              />
              <Route element={<AddTest />} path="/add-test" />
              <Route element={<Test />} path="/test" />
              <Route element={<Edit />} path="/edit" />
            </Routes>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
