import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Prouduct from './pages/Product'

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/product" element={ <Prouduct /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;