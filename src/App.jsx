import { Route, Routes,
         createBrowserRouter, createRoutesFromElements,
         RouterProvider } from 'react-router-dom'
import React from 'react'
import Weather from './components/Weather'
import Header from './components/Header'
import About from './components/About'
import { loader as weatherLoader } from './components/Weather'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Header />} >
    <Route index loader={weatherLoader} element={<Weather />} />
    <Route path='About' element={<About />} />
  </Route>
))


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

