
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Cart from './Components/Cart'
import Course from './Components/Course'
import Home from './Components/Home'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import Purchased from './Components/Purchased'
import Signup from './Components/Signup'
import Teach from './Components/Teach'
import Header from './Components/Header/Header'
import { Provider } from 'react-redux'
import store from './CreactSlice/store'
function App() {
 

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path ='/' element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/purchased' element = {<Purchased/>}/>
      <Route path = '/course' element = {<Course/>}/>
      <Route path = '/teach' element = {<Teach/>}/>
      <Route path = '/cart' element = {<Cart/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/signup' element = {<Signup/>}/>
      <Route path = '/private-route' element = {<PrivateRoute/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
