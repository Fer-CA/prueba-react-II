import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import { Home, Carrito, Detalle, NotFound} from './layouts'
import MyContextProvider from './context/MyContext'

const App = ()=> {

  return (
    <>
      <BrowserRouter>
      <MyContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizzas/:id" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </MyContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
