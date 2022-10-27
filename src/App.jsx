import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import 'flowbite';
import NavBar from './components/NavBar';
import { ApiProvider } from './context/ApiProvider';
import ListHeroes from './components/ListHeroes';
import HeroDetails from './components/HeroDetails';

function App() {

  

  return (

    <ApiProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar  />
          <Routes>
            <Route path='/' element={<ListHeroes  />}></Route>
            <Route path='/heroe/:id' element={<HeroDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ApiProvider>

  )
}

export default App
