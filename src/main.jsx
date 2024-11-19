import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import './styles/responsive.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Provider store={store} > 
    <App />
   </Provider>
   </BrowserRouter>
  </StrictMode>,
)
