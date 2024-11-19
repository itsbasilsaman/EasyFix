import { Routes , Route, useLocation } from 'react-router-dom'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './Pages/Landing'
import ServiecesHome from './components/ServiecesHome'
import CartServices from './components/CartServices'
import WishList from './components/WishList'

function App() {
  
  const location = useLocation()

  const shouldHideHeaderFooter = ['/checkout' , '/cart']

  const hideHeaderFooter = shouldHideHeaderFooter.includes(location.pathname)

  return (
    <>

    { !hideHeaderFooter && <Header/> }
   
    
      {/* <Services/>
      <Loader/>  */}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/cart' element={<CartServices/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/services' element={<ServiecesHome/>} />
        <Route path='/wishlist' element={<WishList/>}/>
      </Routes>
      
    { !hideHeaderFooter &&  <Footer/> }
    </>
  )
}

export default App
