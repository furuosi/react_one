import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { StyleProvider } from '@ant-design/cssinjs'
import App from './App'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StyleProvider hashPriority="high">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyleProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()