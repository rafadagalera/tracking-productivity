import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home.jsx'
import Tasks from './pages/tasks.jsx'
import Progress from './pages/progress.jsx'
import Calendar from './pages/calendar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index: true, element: <Home/>},
      {path: 'tasks', element: <Tasks/>},
      {path: 'progress', element: <Progress/>},
      {path: 'calendar', element: <Calendar/>},
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);