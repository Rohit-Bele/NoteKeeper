import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import NoteProvider from './context/NoteProvider.jsx'
import Router  from "./Routes.jsx"
import {RouterProvider} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <NoteProvider>
      <RouterProvider router={Router}/>
      </NoteProvider>
    </AuthProvider>
  </StrictMode>,
)
