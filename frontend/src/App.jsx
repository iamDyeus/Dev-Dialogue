import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import GettingStarted from './pages/Landing/GettingStarted'
import { Home } from './pages/Landing/Home'


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="getting-started" />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/home" element={<Home />} /> 
          
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

