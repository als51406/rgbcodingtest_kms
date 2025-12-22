import './Main.css'
import Footer from "../components/Footer"
import { Header } from "../components/Header"
import { Home } from "../pages/Home"
import Introduction from "../pages/Introduction"
import { Business } from '../pages/Business'
import { Product } from '../pages/Product'
import { Why } from '../pages/Why'

export const Main = () => {
  return (
    <div id="mainWrap" >
       <Header/>
       <Home/>
       <Introduction/>
       <Business/>
       <Product/>
       <Why/>
       <Footer/>

    </div>
  )
}
