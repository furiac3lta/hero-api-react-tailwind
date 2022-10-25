import './App.css'
import Cards from './components/Cards'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Heroe from './components/Heroe'
import 'flowbite';
function App() {
 


  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cards />}></Route> 
          <Route path='/heroe/:id' element={<Heroe />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
