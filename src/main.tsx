import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './layout/docs/app'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
    <App />
    <div>hello</div>
    </>
  </StrictMode>,
)
