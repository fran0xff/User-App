import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import {UsersApp} from './UsersApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp />
  </StrictMode>,
)
