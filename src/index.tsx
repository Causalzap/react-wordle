import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client' // 只需要这个

import App from './App'
import { AlertProvider } from './context/AlertContext'
import reportWebVitals from './reportWebVitals'

// 1. 获取 DOM 容器
const container = document.getElementById('root')

// 2. 创建 root 并渲染
if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <AlertProvider>
        <App />
      </AlertProvider>
    </React.StrictMode>
  )
}

// 性能监测
reportWebVitals()