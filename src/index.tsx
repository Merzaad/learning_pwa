import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Board from './routes/Board'
import NavbarM from './components/navbar/navbar'
import { store } from './app/store'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

console.log('testSW')
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NavbarM />}>
            <Route index element={<Board />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.register()
