import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Description from './pages/Description'
import Trailer from './pages/Trailer'
import Error from './pages/Error'

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/description/:id' element={<Description />} />
            <Route path='/trailer/:id' element={<Trailer />} />
            <Route path='/*' element={<Error />} />
        </Routes>
    </div>
  )
}

export default Main
