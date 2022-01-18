import React from 'react'
import Search from './components/Search'
import Newstitle from './components/Newstitle'
import { Route, Routes } from 'react-router-dom'
import Details from './Details'
// import Newstauto from './components/Newstauto'

function App() {
  return (
    <div>
      {/* <Search /> */}
      <Routes>
        <Route index element={<Newstitle />} />
        <Route path="details" element={<Details />}/>
      </Routes>
      {/* <Newstauto /> */}
    </div>
  )
}

export default App
