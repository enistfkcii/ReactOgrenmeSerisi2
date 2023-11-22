
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Detail from './pages/Detail'
import Home from './pages/Home'
function App() {

  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/detail/:id' element={<Detail></Detail>}></Route>
      </Routes>
    </Router>
    </>
  )
  }

export default App
