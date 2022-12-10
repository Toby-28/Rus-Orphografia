import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@material-tailwind/react'
import Test from './Test'
import Result from './Result'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Styles
import './assets/tailwind.css'
import { Provider } from 'react-redux'
import store from './store/store'
import AddTest from './AddTest'
import AddVariants from './AddVariants'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Routes>
              <Route index element={<App />} />
              <Route element={<Test />} path="/test" />
              <Route element={<Result />} path="result" />
              <Route element={<AddTest />} path="/add-test" />
              <Route element={<AddVariants />} path="/add-variants" />
            </Routes>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
