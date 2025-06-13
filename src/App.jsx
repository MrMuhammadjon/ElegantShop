import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLoyout from './layout/MainLoyout'
import Account from './page/Account'
import Blog from './page/Blog'
import Cart from './page/Cart'
import Conatact from './page/Contact'
import Home from './page/Home'
import Product from './page/Product'
import Shop from './page/Shop'

const App = () => {

  const router =createBrowserRouter([
    {
      path: '/',
      element: <MainLoyout />,
      children: [
        {index: true, element: <Home/>}
      ]

    }
  ])

  return <RouterProvider router={router} />


}

export default App
