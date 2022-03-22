import React from 'react'
import { RoutesNames } from './constants/routes'
import CloseUp from './pages/close-up'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import VehicleDriverInCabin from './pages/vehicle-driver-in-cabin'
import StaticGestures from './pages/static-gestures'
import AnimatedGestures from './pages/animated-gestures'
import Home from './pages/home'

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes >
        <Route path={RoutesNames.ROOT} element={<Home />} /> 
        <Route path={RoutesNames.CLOSE_UP} element={<CloseUp />} />
        <Route path={RoutesNames.DRIVER} element={<VehicleDriverInCabin />} />
        <Route path={RoutesNames.STATIC_GESTURES} element={<StaticGestures />} />
        <Route path={RoutesNames.ANIMATED_GESTURES} element={<AnimatedGestures />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App